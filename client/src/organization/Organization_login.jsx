import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Organization_login(){

        const  [email, setEmail] = useState();
        const  [password, setPassword] = useState();
        const  [ showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate();
    
        const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/Organization_login', {email, password})
            .then(result => {
                console.log(result)
                if(result.data === "Success"){
                    navigate(`/Organization_success/${email}`)
                }
                else if(result.data === "unsuccess"){
                    Swal.fire('Алдаа', 'Уг байгууллага бүртгэлгүй байна !!', '');
                }
                else if(result.data === "incorrect"){
                    Swal.fire('Алдаа', 'Нууц үг буруу байна !!', '');
                }

            })
            .catch(err => console.log(err))
        }
        return (
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25">
                    <h2 style={{color: "#4682b4"}}>Байгууллагаар нэвтрэх</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong> Байгууллага имэйл хаяг :</strong>
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
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Байгууллага нууц үг :</strong>
                            </label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Нууц үгээ оруулна уу "
                                    autoComplete="off"
                                    name="password"
                                    className="form-control rounded-0"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    >
                                    {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                                </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-10" style={{backgroundColor: '#4682b4'}}>Нэвтрэх</button>
                        </form>
                        <Link to="/ForgetPassword">Нууц үгээ мартсан уу ?</Link>
                        <Link to="/organization_register" className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none" style={{marginTop: "7px"}}>Байгууллагаар бүртгүүлэх</Link>
                        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none" style={{marginTop: "7px"}}>Буцах</Link>

                    
                </div>
            </div>
    
    
    );
}
export default Organization_login;