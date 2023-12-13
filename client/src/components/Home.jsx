import React from "react";
import "./styles.css";
function Home() {
  return (
    <div>
       <section class="home" id="home">
        <div class="slides-container">
            <div class="slide-active">
                <div class="content">
                  <h1 style={{marginLeft: '30px'}}>Бидний зорилго</h1>
                    <h3 style={{ fontStyle: 'italic', marginLeft: '25px'}}>Боловсрол нь улс үндэстэн, хүний хөгжлийн 
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
    </div>
  );
}

export default Home;
