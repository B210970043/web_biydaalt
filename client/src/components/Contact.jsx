import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faLocation, faLocationArrow, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <section class="contact" id="contact">
      <h1 style={{ color: 'black'}}>Бидэнтэй холбогдоорой</h1>
    <div class="icons-container">
        <div class="icons">
            <i class="fas fa-phone"><FontAwesomeIcon icon={faPhone} /></i>
            <h3 style={{ color: 'black'}}>Утасны дугаар</h3>
            <p style={{ color: 'black'}}>+97699878787</p>
            <p style={{ color: 'black'}}>+97680989899</p>
        </div>
        <div class="icons">
        <i class="fas fa-email"><FontAwesomeIcon icon={faAddressCard} /></i>

            <h3 style={{ color: 'black'}}>Имэйл хаяг</h3>
            <p style={{ color: 'black'}}>baljka09270101@gmail.com</p>
        </div>
        <div class="icons">
        <i class="fas fa-phone"><FontAwesomeIcon icon={faLocation} /></i>
            <h3 style={{ color: 'black'}}>Хаяг байршил</h3>
            <p style={{ color: 'black'}}>Mongolia,Evenue center,Gem pla</p>
        </div>
    </div>
    </section>
  );
}

export default Contact;

























