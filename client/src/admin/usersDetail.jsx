import React, { useState, useEffect, Component } from 'react';
import { faTrash, faFontAwesome, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function UsersDetail() {
  const [data, setData] = useState([]);
  const navigate  = useNavigate();

  useEffect(() => {
      usersDetail();
  }, []);
  const usersDetail=()=>{
    fetch('http://localhost:3001/usersDetail',{
      method: "GET",
    })
    .then((res) => res.json())
    .then(data => setData(data.data))
      .catch(err => console.error(err));
  }

  const deleteUser = (id, name) => {
    if (window.confirm(`Хэрэглэгчийг устгах уу ? ${name}`)) {
      fetch("http://localhost:3001/deleteUser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          userid: id,
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
          usersDetail();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
    }
  };
  

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Хэрэглэгчдийн мэдээлэл :</h1>
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <table className='table table-info'>
          <thead>
            <tr>
              <th>Хэрэглэгчийн дугаар</th>
              <th>Хэрэглэгчийн нэр</th>
              <th>Хэрэглэгчийн имэйл хаяг</th>
              <th>Хэрэглэгчийн нууц үг</th>
              <th>Устгах</th>
              <th>Засах</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d._id}>
                <td>{d._id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteUser(d._id, d.name)}
                    style={{ cursor: 'pointer', color: 'red' }}
                  />
                </td>
                <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => navigate(`/UpdateUser/${d._id}`)}
                  style={{ cursor: 'pointer', color: 'blue' }}
                />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/admin">
          <button style={{ marginTop: '20px', padding: '10px', background: 'blue',color: 'white' }}>Гарах</button>
        </Link>
      </div>
    </div>
  );
}

export default UsersDetail;
