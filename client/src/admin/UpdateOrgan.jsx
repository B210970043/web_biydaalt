import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


function UpdateOrgan() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [organization, setOrganization] = useState({
        name: "",
        email: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:3001/organization/${id}`)
            .then(res => {
                setOrganization(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setOrganization({
            ...organization,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/organization/${id}`, organization)
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
                      navigate('/organization')                    
                    }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50  bg-dark text-white p-5">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Байгууллага нэр : </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Байгууллага нэр оруулна уу "
                            value={organization.name}
                            onChange={handleChange}
                        />
                        <br /><br />
                    </div>
                    <div>
                        <label htmlFor="email">Байгууллага имэйл : </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Байгууллага имэйл оруулна уу "
                            value={organization.email}
                            onChange={handleChange}
                        />
                        <br /><br />
                    </div>
                    <button type="submit" className="btn btn-info">Шинэчлэх</button>
                </form>
                <Link to="/organization">
                        <button style={{ marginTop: '20px', padding: '10px', }}>Буцах</button>
                </Link>
            </div>
        </div>
    );
}

export default UpdateOrgan;
