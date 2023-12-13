import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import "./scholar.css";

function ShowSc() {
  const { email } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/showSc/${email}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'blue' }}>
        Тэтгэлэгийн мэдээлэл :{' '}
      </h1>
      <div style={{ padding: '30px', textAlign: 'center' }}>
        
        <table >
          <thead className='head-scholar'>
            <tr>
              <th>Байгууллагын нэр :</th>
              <th>Байгууллагын имэйл хаяг :</th>
              <th>Тэтгэлэг нэр :</th>
              <th>Хөтөлбөрийн нэр:</th>
              <th>Тэтгэлэгт багтах зүйлс:</th>
              <th>Тэтгэлэгийн шаардлагууд:</th>
              <th>Зарласан огноо:</th>
            </tr>
          </thead>
          <tbody className='body-scholar'>
            {Array.isArray(data) &&
              data.map((d) =>
                d.map((a) => (
                  <tr key={a._id}>
                    <td>{a.nameofBaiguullaga}</td>
                    <td>{a.email}</td>
                    <td>{a.nameofTetgeleg}</td>
                    <td>{a.hotolbor}</td>
                    <td>{a.things1}</td>
                    <td>{a.shaardlaga1}</td>
                    <td>{a.date}</td>
                  </tr>
                ))
              )}
          </tbody>
        </table>

        <Link to={`/Organization_success/${email}`}>
          <button className='exit-button' style={{ marginTop: '20px', padding: '10px', background: 'blue', color: 'white' }}>Гарах</button>
        </Link>
      </div>
    </div>
  );
}

export default ShowSc;
