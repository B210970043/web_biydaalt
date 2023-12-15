import { faPhone, faSchoolFlag, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style.css";

function Home() {
  const { email } = useParams();
  const [user, setUser] = useState("");
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [saveStatus, setSaveStatus] = useState(null);

  const [showSavedData, setShowSavedData] = useState(false);
  const [savedData, setSavedData] = useState([]);
 const [aaa,setaaa] = useState([]);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    organizationDetail();
  }, []);

  const organizationDetail = () => {
    fetch('http://localhost:3001/scholars', {
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
      const response = await axios.post(`http://localhost:3001/saveScholarUser/${name}/${user._id}`);
      setSaveStatus(response.data);
      console.log('Server Response:', response.data);
      console.log('Scholar Name:', name);
    } catch (err) {
      console.log('Error:', err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/saveScholarUser/${user._id}`);
        setaaa(response.data);
        console.log('a:', response.data);
        // const scholarName = response.data.scholarName;
        console.log('Scholar Name:', response.data.scholarName);
      } catch (err) {
        console.log('Error:', err);
      }
    };
  
    fetchData(); // Call the async function
  }, [user._id]); // Add dependencies if needed
  
  const handleDropdownItemClick = async (_id) => {
    try {
      const response = await axios.get(`http://localhost:3001/searchByScholarName/${_id}`);
      setSavedData(response.data);
      setShowSavedData(true);
    } catch (error) {
      console.error('Error:', error);
      console.error(error.message);
    }
  };
  
  
  
  

  return (
    <div>
        <header className="header">
          <a href="#home" class="logo"><i class="fas fa-phone"><FontAwesomeIcon icon={faSchoolFlag} /></i></a>
          <nav className="navbar">
            <a href="#home">Нүүр</a>
            <Dropdown as={ButtonGroup}>
              <a href="#tetgeleg">Тэтгэлэг</a>
              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
              <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleDropdownItemClick(user._id)}>
                Хадгалсан Тэтгэлэг
              </Dropdown.Item>
                <Dropdown.Item href="#tetgeleg">Бүх Тэтгэлэг</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a href="#contact">Холбоо барих</a>
            <Link to={`/Myinfo/${user._id}`}>Миний мэдээлэл</Link>
            <a href="/">Гарах</a>
            <h1 style={{ font: "italic small-caps bold 20px/30px Georgia, serif", color: "Blue" }}>Сайн уу "{user.name}"</h1>
          </nav>
          <div className="icons">
            <div id="menu-btn" className="fas fa-bars"></div>
          </div>
        </header>

      <section className="home" id="home">
        <div className="slides-container">
          <div className="slide-active">
            <div className="content">
              <h2 style={{marginLeft: '30px'}}>Оюутанд зориулсан тэтгэлэгийн систем</h2>
              <h3 style={{ fontStyle: 'italic', marginLeft: '100px', fontSize: '24px'}}>
                Боловсрол нь улс үндэстэн, хүний хөгжлийн
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



      <section className="tet" id="tet">
        <div className="conhome">
        <h1>Хадгалсан тэтгэлэг</h1>

          <div className="slide-actives">
          <div class="flex-containers">
            {aaa.map((d) => (
              <div
                key={d._id}
                className={`box-containers ${selectedScholarship === d._id ? "selected" : ""}`}
                onClick={() => handleBoxClick(d._id)}
              >
              <h1>{d.scholarName}</h1>
              </div>
            ))} 
            </div>
          </div>
        </div>
      </section>







      <section className="tet" id="tet">
        <div className="conhome">
        <h1>Бүх тэтгэлэг</h1>

          <div className="slide-actives">
          <div class="flex-containers">
            {data.map((d) => (
              <div
                key={d._id}
                className={`box-containers ${selectedScholarship === d._id ? "selected" : ""}`}
                onClick={() => handleBoxClick(d._id)}
              >
           <div className='b'>
              <button onClick={(e) => { e.stopPropagation(); saveClick(d.nameofTetgeleg); }}
              style={{ backgroundColor: saveStatus === 'true' ? 'green' : 'blue' }}
               class="fas fa-phone">
                <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
                <h1>{d.nameofBaiguullaga}</h1>
                <p>{d.date}</p>
                <h2>{d.nameofTetgeleg}</h2>   
                <p>{d.hotolbor}</p>

                {selectedScholarship === d._id && (
                  <div className="additional-details">
                    <h3>Тэтгэлэгийн шалгуурууд : </h3>
                    <li>{d.shaardlaga1}</li>
                    <li>{d.shaardlaga2}</li>
                    <li>{d.shaardlaga3}</li>
                    <div className="boxs">
                      <h3>Бүрдүүлэх шаардлагатай материалууд : </h3>
                      <li>{d.material1}</li>
                      <li>{d.material2}</li>
                      <li>{d.material3}</li>
                      <a href={d.url}>Дэлгэрэнгүй</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
