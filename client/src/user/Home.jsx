import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style.css"
import { useNavigate } from "react-router-dom";

function Home() {
    const { email } = useParams();
    const [user, setUser] = useState("");
        const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/userFind/${email}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err));
    }, [email]);

  return (
    <div>
    <header>
        <header className="header">
        <a href="#home" class="logo"><i class="fas fa-phone"><FontAwesomeIcon icon={faSchoolFlag} /></i></a>
          <nav className="navbar">
              <a href="#home">Нүүр</a>
              <a href="#tetgeleg">Тэтгэлэг</a>
              <a href="#contact">Холбоо барих</a>
              <Link to={`/Myinfo/${user._id}`}>Миний мэдээлэл</Link>
              <a href="/">Гарах</a>
              <h1 style={{font: "italic small-caps bold 20px/30px Georgia, serif",color: "Blue"}}>Сайн уу "{user.name}"</h1>
          </nav>
        <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
        </div>
        </header>
    </header>
    <section className="home" id="home">
        <div className="slides-container">
            <div className="slide-active">
                <div className="content">
                    <h2>Оюутанд зориулсан тэтгэлэгийн систем</h2>
                    <h3>Боловсрол нь улс үндэстэн, хүний хөгжлийн 
                      суурь. Тийм учраас залууст суралцах боломжийг 
                      нээлттэй байлгахын тулд боловсролыг 
                      хүртээмжтэй болгож нийгэмд эерэг өөрчлөлт 
                      авчирхаар бид зорин ажиллаж байна.
                      </h3>
                </div>
                <div className="img">
            
                </div>
            </div>
        </div>
   </section>
  
    <section className="contact" id="contact">
    <div className="icons-container">
        
        <div className="icons">
            <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
            
            <h3>number</h3>
            <p>+97699878787</p>
            <p>+97680989899</p>
        </div>
        <div className="icons">
        <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>

            <h3>our email</h3>
            <p>baljka09270101@gmail.com</p>
        </div>
        <div className="icons">
        <i className="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
            <h3>our address</h3>
            <p>Mongolia</p>
        </div>
    </div>
    </section>
    </div>
  );
}

export default Home;
