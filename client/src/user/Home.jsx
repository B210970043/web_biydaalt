import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, faSave, faSchoolFlag, faStar } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style.css"
import { useNavigate } from "react-router-dom";
import { Dropdown, ButtonGroup } from 'react-bootstrap';

function Home() {
    const { email } = useParams();
    const [user, setUser] = useState("");
    const [selectedScholarship, setSelectedScholarship] = useState(null);

        const [data, setData] = useState([]);
        const navigate = useNavigate();
        useEffect(() => {
            organizationDetail();
        }, []);
        const organizationDetail = () => {
          fetch('http://localhost:3001/scholars',{
            method: "GET",
          })
          .then((res) => res.json())
          .then(data => setData(data.data))
            .catch(err => console.error(err));
        };
    useEffect(() => {
        axios.get(`http://localhost:3001/userFind/${email}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err));
    }, [email]);

    const handleBoxClick = (id) => {
      setSelectedScholarship(selectedScholarship === id ? null : id);
    };
    
    const saveClick = async (name) => {
      try {
        const res = await axios.post(`http://localhost:3001/saveScholarUser/${name}/${user.id}`);
        setSave(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    

  return (
    <div>
    <header>
        <header className="header">
        <a href="#home" class="logo"><i class="fas fa-phone"><FontAwesomeIcon icon={faSchoolFlag} /></i></a>
          <nav className="navbar">
              <a href="#home">Нүүр</a>
              <Dropdown as={ButtonGroup}>
              <a href="#tetgeleg">Тэтгэлэг</a>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu>
                  <Dropdown.Item href={``}>Хадгалсан Тэтгэлэг</Dropdown.Item>
                  <Dropdown.Item href="#tetgeleg">Бүх Тэтгэлэг</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
   <section className="tetgeleg" id="tetgeleg">
        <div className="slides-container">
            <div className="slide-active">
              {data.map((d) => (
                <div 
                  key={d._id}
                  className={`box container ${selectedScholarship === d._id ? "selected" : ""}`}
                  onClick={() => handleBoxClick(d._id)}
              >
                  <h1>{d.nameofBaiguullaga}</h1>
                  <button onClick={() => saveClick(d.nameofTetgeleg)} class="fas fa-phone"><FontAwesomeIcon icon={faStar} /></button>
                    {d.date}
                  <h2>{d.nameofTetgeleg}</h2>
                  <p>{d.hotolbor}</p>
                  
                      {selectedScholarship === d._id && (
                          <div className="additional-details">
                            <h3>Тэтгэлэгийн шалгуурууд : </h3>
                            <li>{d.shaardlaga1}</li>
                            <li>{d.shaardlaga2}</li>
                            <li>{d.shaardlaga3}</li>
                        <div className="box">
                          <h3>Бүрдүүлэх шаардлагатай материалууд : </h3>
                            <li>{d.material1}</li>
                            <li>{d.material2}</li>
                            <li>{d.material3}</li>
                            <a href={d.url}>Холбоос</a>
                        </div>
                        </div>
                )}
                </div>
              ))}
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
