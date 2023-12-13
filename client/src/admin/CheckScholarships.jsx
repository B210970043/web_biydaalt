import React, { useState, useEffect } from 'react';
import { Link,useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrash, faFontAwesome, faEdit, faCheck, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import Swal from "sweetalert2";


function CheckScholarships() {
  const { email } = useParams();
  const [data, setData] = useState([]);
  const [scholarshipStatus, setScholarshipStatus] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:3001/scholarshipsCheck/${email}`)
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
}, []);
const deleteScholar = (id, name) => {
    if (window.confirm(`Уг тэтгэлэгийг устгах уу ? ${name}`)) {
      fetch("http://localhost:3001/deleteScholar", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          scholar: id,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          alert(data.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
    }
  };
  const addScholarshipsClick = async (id) => {
    
      axios.put(`http://localhost:3001/addS/${id}`)
      .then(res => {
        console.log(res);
          setScholarshipStatus(true);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Баталгаажуулсан !!',
                showConfirmButton: false,
                timer: 1500
              })                   
            
            if(res.data === 'already'){
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Баталгаажсан тэтгэлэг байна !!',
                showConfirmButton: false,
                timer: 1500
              }) 
            }
    })
    .catch(err => {
        console.log(err);
    });
  };
  
  return (
    <div>
    <h1 style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center',color: 'blue'}}>Тэтгэлэгийн мэдээлэл : </h1>
      <div style={{ padding: '30px', textAlign: 'center' }}>
      <table class='table table-info'>
        <thead>
            <tr>
              <th>Байгууллагын нэр :</th>
              <th>Байгууллагын имэйл хаяг :</th>
              <th>Тэтгэлэг нэр :</th>
              <th>Хөтөлбөрийн нэр:</th>
              <th>Тэтгэлэгт багтах зүйлс:</th>
              <th>Тэтгэлэгийн шаардлагууд:</th>
              <th>Зарласан огноо:</th>
              <th>Устгах:</th>
              <th>нэмэх:</th>
            </tr>
        </thead>
        <tbody>
  {Array.isArray(data) && data.map((d) => (
    d.map((a)=>
    <tr key={a._id}>
      <td>{a.nameofBaiguullaga}</td>
      <td>{a.email}</td>
      <td>{a.nameofTetgeleg}</td>
      <td>{a.hotolbor}</td>
      <td>{a.things1}</td>
      <td>{a.shaardlaga1}</td>
      <td>{a.date}</td>
      <td>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteScholar(a._id, a.nameofTetgeleg)}
          style={{ cursor: 'pointer', color: 'red' }}
        />
      </td>
      <td>
        <FontAwesomeIcon
          icon={faCheck}
          onClick={() => addScholarshipsClick(a._id)}
          style={{ cursor: 'pointer',color: scholarshipStatus ? 'green' : 'red',}}
          />
      </td>
    </tr>
 ) ))}
</tbody>

        </table>
      
      <Link to="/organization">
          <button style={{ marginTop: '20px', padding: '10px', background: 'blue',color: 'white' }}>Гарах</button>
        </Link>
        </div>
    </div>
  )
}
export default CheckScholarships;
