import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faLocation, faLocationArrow, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <section class="contact" id="contact">
      <h1>Бидэнтэй холбогдоорой</h1>
    <div class="icons-container">
        <div class="icons">
            <i class="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
            <h3>Утасны дугаар</h3>
            <p>+97699878787</p>
            <p>+97680989899</p>
        </div>
        <div class="icons">
        <i class="fas fa-email"><FontAwesomeIcon icon={faAddressCard} /></i>

            <h3>Имэйл хаяг</h3>
            <p>baljka09270101@gmail.com</p>
        </div>
        <div class="icons">
        <i class="fas fa-phone"><FontAwesomeIcon icon={faLocation} /></i>
            <h3>Хаяг байршил</h3>
            <p>Mongolia,Evenue center,Gem pla</p>
        </div>
    </div>
    </section>
  );
}

export default Contact;

























