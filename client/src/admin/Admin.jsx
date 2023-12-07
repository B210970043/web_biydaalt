import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Admin() {
    const navigate = useNavigate();

    const handleButtonClick = (route) => {
        navigate(route);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleFormSubmit}>
                    <button
                        type="button"
                        onClick={() => handleButtonClick('/organization')}
                        className="btn btn-success w-100 rounded-10"
                        style={{ backgroundColor: '#4682b4' }}
                    >
                        Байгууллага
                    </button>
                    <button
                        type="button"
                        onClick={() => handleButtonClick('/usersDetail')}
                        className="btn btn-success w-100 rounded-10"
                        style={{ backgroundColor: '#4682b4',marginTop: '3px' }}
                    >
                        Хэрэглэгч
                    </button>
                </form>
                <Link
                    to="/login"
                    className="btn btn-default border w-100 bg-light rounded-10 text-decoration-none"
                >
                    Гарах
                </Link>
            </div>
        </div>
    );
}

export default Admin;
