import React from "react";
import "./styles.css";
import owner1 from "./images/owner.jpg";
import elon from "./images/elon.jpg";
import aus from "./images/aust.jpg";
function About() {
  return (
      <section class="about" id="about">
              <h1 style={{ color: 'black'}}>Манай баг</h1>
        <div className="box-container">
          <div className="box-0">
            <div className="box">
              <div className="img">
                <img src={owner1} alt="" />
              </div>
            </div>
            <h3 style={{ color: 'black'}}>Д.Балжинням</h3>
            <h4 style={{ color: 'black'}}>CEO, President,Master,Creator</h4>
          </div>

         <div className="box-0">
            <div className="box">
              <div className="img">
                <img src={elon} alt="" />
              </div>
            </div>
            <h3 style={{ color: 'black'}}>Elon Musk</h3>
            <h4 style={{ color: 'black'}}>Back-End developer, MongoDB</h4>

          </div>

          <div className="box-0">
            <div className="box">
              <div className="img">
                <img src={aus} alt="" />
              </div>
            </div>
            <h3 style={{ color: 'black'}}>Unknown-man</h3>
            <h4 style={{ color: 'black'}}>Front-End developer</h4>

          </div>
        </div>
      </section>
  );
}

export default About;
