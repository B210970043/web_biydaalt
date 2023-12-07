import React from "react";
import "./styles.css";
import owner1 from "./images/owner.jpg";
import elon from "./images/elon.jpg";
import aus from "./images/aust.jpg";
function About() {
  return (
      <section class="about" id="about">
              <h1>Манай баг</h1>
        <div className="box-container">
          <div className="box-0">
            <div className="box">
              <div className="img">
                <img src={owner1} alt="" />
              </div>
            </div>
            <h3>Д.Балжинням</h3>
            <h4>CEO, President,Master,Creator</h4>
          </div>

         <div className="box-0">
            <div className="box">
              <div className="img">
                <img src={elon} alt="" />
              </div>
            </div>
            <h3>Elon Musk</h3>
            <h4>Back-End developer, MongoDB</h4>

          </div>

          <div className="box-0">
            <div className="box">
              <div className="img">
                <img src={aus} alt="" />
              </div>
            </div>
            <h3>Unknown-man</h3>
            <h4>Front-End developer</h4>

          </div>
        </div>
      </section>
  );
}

export default About;
