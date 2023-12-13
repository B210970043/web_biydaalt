import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Myinfo() {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:3001/usersDetail/${_id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err));
    }, [_id]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/usersDetail/${_id}`, user)
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
                      navigate(`/home/${user.email}`)                    
                    }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="d-flex w-70 vh-40 justify-content-center align-items-center">
            <div className="w-50 border bg-dark text-white p-5">
                <h1>Хэрэглэгчийн хувийн мэдээлэл/CV</h1>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="name"> Нэр : </label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Хэрэглэгчийн нэр оруулна уу "
                            value={user.name}
                            onChange={user.name}
                        />
                        <label htmlFor="email"> Имэйл : </label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Хэрэглэгчийн имэйл оруулна уу "
                            value={user.email}
                            onChange={user.email}
                        />
    
                        <label htmlFor="password"> Нууц үг : </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder=""
                            value={user.password}
                            onChange={handleChange}
                        />
    
                        <label htmlFor="email">Ажлын туршлага/Байгууллага нэр: </label>
                        <input
                            type="text"
                            name="experience"
                            className="form-control"
                            placeholder="Ажлын туршлага оруулна уу "
                            value={user.experience}
                            onChange={handleChange}
                        />
    
                        <label htmlFor="dugaar"> Утасны дугаар : </label>
                        <input
                            type="text"
                            name="phone_number"
                            className="form-control"
                            placeholder="Хэрэглэгчийн утасны дугаар оруулна уу "
                            value={user.phone_number}
                            onChange={handleChange}
                        />
    
                        <label htmlFor="dugaar">Хэрэглэгчийн РД дугаар : </label>
                        <input
                            type="text"
                            name="r_dugaar"
                            className="form-control"
                            placeholder="Хэрэглэгчийн РД оруулна уу "
                            value={user.r_dugaar}
                            onChange={handleChange}
                        />
                        <br></br>

                        <label htmlFor="Huis"> Хүйс : </label>
                        
                            <select
                                name="Huis"
                                value={user.Huis}
                                onChange={handleChange}
                            >
                                    <option value={"er"}>Эр</option>
                                    <option value={"em"}>Эм</option>
                            </select>

                       
                       <br></br>
                        <label htmlFor="dugaar">Төрсөн он сар : </label>
                        <input
                            type="date"
                            name="Birth_date"
                            className="form-control"
                            placeholder="Төрсөн он сар оруулна уу "
                            value={user.Birth_date}
                            onChange={handleChange}
                        />
                        <label htmlFor="dugaar">Мэргэжлийн салбар : </label>
                        <input
                            type="text"
                            name="Undsen_mergejliin_salbar"
                            className="form-control"
                            placeholder="Мэргэжлийн салбар оруулна уу "
                            value={user.Undsen_mergejliin_salbar}
                            onChange={handleChange}
                        />
                        <label htmlFor="dugaar"> Суралцаж буй мэргэжил: </label>
                        <input
                            type="text"
                            name="Mergejil"
                            className="form-control"
                            placeholder="Хэрэглэгчийн мэргэжил оруулна уу "
                            value={user.Mergejil}
                            onChange={handleChange}
                        />
                        <br></br>
                        <label htmlFor="dugaar">Ажлын туршлага сар/жил : </label>
                        <select
                            name="Job_experience"
                            value={user.Job_experience}
                            onChange={handleChange}>
                            <option value={"0"}>байхгүй</option>
                            <option value={"1"}>1 сар</option>
                            <option value={"2"}>2 сар</option>
                            <option value={"3"}>3 сар</option>
                            <option value={"4"}>4 сар</option>
                            <option value={"5"}>5 сар</option>
                            <option value={"6"}>6 сар</option>
                            <option value={"7"}>7 сар</option>
                            <option value={"8"}>8 сар</option>
                            <option value={"9"}>9 сар</option>
                            <option value={"10"}>10 сар</option>
                            <option value={"11"}>11 сар</option>
                            <option value={"12"}>12 сар</option>
                            <option value={"1year"}>1 жил</option>
                            <option value={"2year"}>2 жил</option>
                        </select>
                        <br></br>

                        <label htmlFor="dugaar"> голч дүн : </label>
                        <input
                            type="text"
                            name="GPA"
                            className="form-control"
                            placeholder="Хэрэглэгчийн РД оруулна уу "
                            value={user.GPA}
                            onChange={handleChange}
                        />
                        <label htmlFor="dugaar">Курсын дугаар : </label>
                        <select 
                            name="Course"
                            value={user.Course}
                            onChange={handleChange}
                            >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                        <br></br>
                    <button type="submit" className="btn btn-info">Шинэчлэх</button>
                </form>
                <Link to={`/home/${user.email}`}>
                        <button style={{ marginTop: '20px', padding: '10px', }}>Буцах</button>
                </Link>
            </div>
        </div>
    );
}

export default Myinfo;
