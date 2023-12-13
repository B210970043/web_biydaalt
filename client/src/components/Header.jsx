import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPhone, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header>
        
        <header class="header">
        <a href="#home" class="logo">        <i class="fas fa-phone"><FontAwesomeIcon icon={faSchoolFlag} /></i></a>
          <nav class="navbar">
              <a href="#home" style={{ color: 'black'}}>Нүүр</a>
              <a href="#about" style={{ color: 'black'}}>Бидний тухай</a>
              <a href="#contact" style={{ color: 'black'}}>Холбоо барих</a>
              <a href="/login" style={{ color: 'black'}}>Нэвтрэх</a>
            <h2 style={{marginLeft: "40px", width: "20px", font: "italic small-caps bold 60px/30px Georgia, serif"
,color: "Blue"}}>Тэтгэлэг</h2>
          </nav>
        <div class="icons">
            <div id="menu-btn" class="fas fa-bars"></div>
        </div>
        </header>
    </header>
  );
}

export default Header;
