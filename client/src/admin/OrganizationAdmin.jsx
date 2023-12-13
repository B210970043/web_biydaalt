import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrash, faFontAwesome, faEdit, faCheck, faAdd, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Scholarships/scholar.css'
function OrganizationAdmin() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      organizationDetail();
  }, []);
  const organizationDetail = () => {
    fetch('http://localhost:3001/organization',{
      method: "GET",
    })
    .then((res) => res.json())
    .then(data => setData(data.data))
      .catch(err => console.error(err));
  };

  const deleteOrganization = (id, name) => {
    if (window.confirm(`Уг байгууллагыг устгах уу ? ${name}`)) {
      fetch("http://localhost:3001/deleteOrganization", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          organid: id,
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
          organizationDetail();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
    }
  };
  
  return (
    <div>
    <h1 style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center',color: 'blue'}}>Байгууллагын мэдээлэл : </h1>
      <div style={{ padding: '30px', textAlign: 'center' }}>
      <table >
          <thead className='head-scholar'>
            <tr>
              <th></th>
              <th>Байгууллагын дугаар : </th>
              <th>Байгууллагын нэр :</th>
              <th>Байгууллагын имэйл хаяг :</th>
              <th>Байгууллагын нууц үг :</th>
              <th>Устгах</th>
              <th>Засах</th>
              <th>Тэтгэлэг харах</th>


            </tr>
          </thead>
          <tbody className='body-scholar'>
          {data.map((d) => (
            <tr key={d._id}>
              <td>{d.role}</td>
              <td>{d._id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteOrganization(d._id, d.name)}
                  style={{ cursor: 'pointer', color: 'red' }}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => navigate(`/UpdateOrgan/${d._id}`)}
                  style={{ cursor: 'pointer', color: 'blue' }}
                />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faCheckToSlot}
                  onClick={() => navigate(`/CheckScholarships/${d.email}`)}
                  style={{ cursor: 'pointer', color: d.hasScholarship ? 'blue' : 'red' }}
                />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      
      <Link to="/admin">
          <button  className='exit-button' style={{ marginTop: '20px', padding: '10px', background: 'blue',color: 'white' }}>Гарах</button>
        </Link>
        </div>
    </div>
  )
}
export default OrganizationAdmin;
