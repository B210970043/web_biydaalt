import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/usersDetail/${id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/usersDetail/${id}`, user)
            .then(res => {
                console.log(res);
                if(res.data === 'success'){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Амжилттай шинэчлэгдлээ !!',
                        showConfirmButton: false,
                        timer: 1500
                      })    
                      navigate('/usersDetail')                    
                    }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-dark text-white p-5">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Хэрэглэгчийн нэр : </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Хэрэглэгчийн нэр оруулна уу "
                            value={user.name}
                            onChange={handleChange}
                        />
                        <br /><br />
                    </div>
                    <div>
                        <label htmlFor="email">Хэрэглэгчийн имэйл : </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Хэрэглэгчийн имэйл оруулна уу "
                            value={user.email}
                            onChange={handleChange}
                        />
                        <br /><br />
                    </div>
                    <button type="submit" className="btn btn-info">Шинэчлэх</button>
                </form>
                <Link to="/usersDetail">
                        <button style={{ marginTop: '20px', padding: '10px', }}>Буцах</button>
                </Link>
            </div>
        </div>
    );
}

export default UpdateUser;
