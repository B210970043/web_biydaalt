import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
function ChangePassword() {

    const  [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate = useNavigate()
    const { email } = useParams();

    useEffect(() => {
        console.log("Email from URL:", email);
    }, [email]);
    
    const handleSubmit = (e) => {

        e.preventDefault()
        
        if(password !== repeatPassword){
            showSwal();
        }
        else{
            axios.post('http://localhost:3001/ChangePassword', {email, password})
        .then(result => {console.log(result)
            if (result.data === "success") {
                navigate('/login');
            }
        })
        .catch(err => console.log(err))
        }
        
    }
    const showSwal = () => {
        Swal.fire('Алдаа', 'Нууц үг ижил байх ёстой !!', '');

    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Нууц үг солих </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Шинэ нууц үг :</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Нууц үгээ оруулна уу "
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Нууц үг давтах:</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Нууц үгээ оруулна уу "
                        autoComplete="off"
                        name="repeatPassword"
                        className="form-control rounded-0"
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        
                    </div>
                    
                    <button type="submit" className="btn btn-success w-100 rounded-10" style={{backgroundColor: '#4682b4'}}>Шинэчилэх</button>
                    </form>
                    <Link to="/ForgetPassword" className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none">Буцах</Link>
                
            </div>
        </div>

    );
}
export default ChangePassword;