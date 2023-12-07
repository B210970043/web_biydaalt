import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Alert } from "bootstrap";
function Password() {
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/ForgetPassword', {email})
            .then(result => {
                console.log(result);
                if (result.data === "exists") {
                    navigate(`/ChangePassword/${encodeURIComponent(email)}`);
                }
                else if (result.data === "doesn't") {
                    showSwal();
                }
            })
            .catch(err => console.log(err));
    };
    const showSwal = () => {
        Swal.fire('Алдаа', 'Уг имэйл нь бүртгэлгүй байна !!', '');
    }
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Бүртгэл шалгах :</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Бүртгэлтэй имэйл хаяг:</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Имэйл хаягаа оруулна уу "
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-10" style={{ backgroundColor: '#4682b4' }}>Үргэлжлүүлэх</button>
                </form>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none">Нэвтрэх</Link>
            </div>
        </div>
    );
}

export default Password;
