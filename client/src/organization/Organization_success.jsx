import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../style.css";
function Organization_success() {
  return (
    <div>
    <header>
        
        <header class="header">
        <a href="#home" class="logo"><i class="fa-solid fa-border-style"></i>ScholarShips</a>
          <nav class="navbar">
              <a href="#home">Нүүр</a>
              <a href="#tetgeleg">Тэтгэлэг</a>
              <a href="#contact">Холбоо барих</a>
              <Link to="/login"><button>Гарах</button></Link>
          </nav>
        <div class="icons">
            <div id="menu-btn" class="fas fa-bars"></div>
        </div>
        </header>
    </header>
    <section class="home" id="home">
        <div class="slides-container">
            <div class="slide-active">
                <div class="content">
                    <h2>Оюутанд зориулсан тэтгэлэгийн систем</h2>
                    <h3>Боловсрол нь улс үндэстэн, хүний хөгжлийн 
                      суурь. Тийм учраас залууст суралцах боломжийг 
                      нээлттэй байлгахын тулд боловсролыг 
                      хүртээмжтэй болгож нийгэмд эерэг өөрчлөлт 
                      авчирхаар бид зорин ажиллаж байна.
                      </h3>
                </div>
                <div class="img">
            
                </div>
            </div>
        </div>
   </section>
   <section class="about" id="about">
             <Link to="/addScholarship"><button style={{marginRight: "10px"}}>Тэтгэлэг нэмэх</button></Link>
    </section>
    <section class="about1" id="about1">
             <Link to="/showScholarship"><button>Нэмсэн тэтгэлэг харах</button></Link>
    </section>
    
    <section class="contact" id="contact">
    <div class="icons-container">
        
        <div class="icons">
            <i class="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
            
            <h3>number</h3>
            <p>+97699878787</p>
            <p>+97680989899</p>
        </div>
        <div class="icons">
        <i class="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>

            <h3>our email</h3>
            <p>baljka09270101@gmail.com</p>
        </div>
        <div class="icons">
        <i class="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
            <h3>our address</h3>
            <p>Mongolia</p>
        </div>
    </div>
    </section>
    </div>
  );
}
export default Organization_success;
