import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Organization_Signup() {
    const  [name, setName] = useState()
    const  [email, setEmail] = useState()
    const  [password, setPassword] = useState() 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/organization_register', {name, email, password})
        .then(result => 
            {
                console.log(result)
            if(result.data === 'registered'){
                showSwal();
            }
            else{
                navigate('/Organization_login');
            }
        
        })
        .catch(err => console.log(err))
    }
    const showSwal = () => {
        Swal.fire('Алдаа', 'Уг байгууллагын имэйл хаяг бүртгэлтэй байна !!', '');
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Байгууллагаар бүртгүүлэх : </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Байгууллага нэр :</strong>
                        </label>
                        <input
                        type="text"
                        placeholder="Нэрээ оруулна уу"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Байгууллага имэйл хаяг : </strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Имэйл хаягаа оруулна уу "
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong> Байгууллага нууц үг :</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Нууц үгээ оруулна уу"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-10" style={{backgroundColor: '#4682b4'}}>Бүртгүүлэх</button>
                    </form>
                    <p>Бүртгэлтэй бол Нэвтрэх дарна уу </p>
                    <Link to="/Organization_login" className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none">Нэвтрэх</Link>
                
            </div>
        </div>

    );
}
export default Organization_Signup;