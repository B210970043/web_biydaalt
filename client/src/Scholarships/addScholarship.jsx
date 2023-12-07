import React from "react";
import "./scholar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";

function AddScholarship() {
    const  [nameofBaiguullaga, setName] = useState()
    const  [email, setEmail] = useState()
    const  [nameofTetgeleg, setNameofTetgeleg] = useState()
    const  [hotolbor, setHotolbor] = useState()
    const  [things1, setThings1] = useState()
    const  [things2, setThings2] = useState()
    const  [things3, setThings3] = useState()
    const  [shaardlaga1, setShaardlaga1] = useState()
    const  [shaardlaga2, setShaardlaga2] = useState()
    const  [shaardlaga3, setShaardlaga3] = useState()
    const  [lang1, setLan1] = useState()
    const  [lang2, setLan2] = useState()
    const  [lang3, setLan3] = useState()
    const  [material1, setMaterial1] = useState()
    const  [material2, setMaterial2] = useState()
    const  [material3, setMaterial3] = useState()
    const  [url, setUrl] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const languages = [];
            if (lang1) languages.push("English");
            if (lang2) languages.push("Korean");
            if (lang3) languages.push("Japan");
        axios.post('http://localhost:3001/addScholarship', {nameofBaiguullaga, email, nameofTetgeleg,hotolbor,things1,things2,
        things3,shaardlaga1,shaardlaga2,shaardlaga3,languages,material1,material2,material3,url})
        .then(result => {console.log(result)
            navigate('/Organization_success')
        })
        .catch(err => console.log(err))
    }
    return (
    <div className="tetgeleg">
        <h1>Тэтгэлэг нэмэх</h1>
        <fieldset>
        <form onSubmit={handleSubmit}>  
                <label htmlFor="baiguullaga">Байгууллага нэр : </label>  
                <input  
                    type="text" 
                    name="nameofBaiguullaga" 
                    id="baiguullaga" 
                    placeholder="Байгууллага нэр оруулна уу " 
                    onChange={(e) => setName(e.target.value)}
                    />  
                    <br /><br />  
                    <label htmlFor="email">Байгууллага имэйл хаяг : </label>  
                            <input  
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Байгууллага имэйл хаяг" 
                                onChange={(e) => setEmail(e.target.value)}
                            />  
                            <br /><br /> 
                    <label htmlFor="name">Тэтгэлэг нэр : </label>  
                <input  
                                type="text" 
                                name="nameofTetgeleg" 
                                id="name" 
                                placeholder="Тэтгэлэг нэр оруулна уу" 
                                onChange={(e) => setNameofTetgeleg(e.target.value)}

                            />  
                            <br /><br />  
                            <label htmlFor="hotolbor">Тэтгэлэгийн хөтөлбөрийн мэдээлэл :  </label>  
                <input  
                                type="text" 
                                name="hotolbor" 
                                id="hotolbor" 
                                placeholder="Тэтгэлэг хөтөлбөрийн нэр оруулна уу" 
                                onChange={(e) => setHotolbor(e.target.value)}

                            />  
                            <br /><br />
                            <label htmlFor="things">Тэтгэлэгт багтах зүйлс :  </label>  
                            <br /><br />
                            1.<input  
                                type="text"
                                name="things1"
                                id="things1"
                                placeholder="Тэтгэлэгт багтах зүйлс оруулна уу" 
                                onChange={(e) => setThings1(e.target.value)}
                            />
                            <br /><br />
                            2.<input  
                                type="text"
                                name="things2"
                                id="things2"
                                placeholder="Тэтгэлэгт багтах зүйлс оруулна уу" 
                                onChange={(e) => setThings2(e.target.value)}
                            />
                            <br /><br />
                            3.<input  
                                type="text"
                                name="things3"
                                id="things3"
                                placeholder="Тэтгэлэгт багтах зүйлс оруулна уу" 
                                onChange={(e) => setThings3(e.target.value)}

                                  
                            />
                            <br /><br />
                            <label htmlFor="shaardlaga1">Тэтгэлэгийн шаардлагууд : </label>
                            <br /><br /> 
                            1.<input  
                                type="text" 
                                name="shaardlaga1" 
                                id="shaardlaga" 
                                placeholder="requirements" 
                                onChange={(e) => setShaardlaga1(e.target.value)}

                                  
                            />
                            <br /><br />
                            2.<input  
                                type="text" 
                                name="shaardlaga2" 
                                id="shaardlaga" 
                                placeholder="requirements" 
                                onChange={(e) => setShaardlaga2(e.target.value)}

                                  
                            />
                            <br /><br />
                            3.<input  
                                type="text" 
                                name="shaardlaga3" 
                                id="shaardlaga" 
                                placeholder="requirements" 
                                onChange={(e) => setShaardlaga3(e.target.value)}

                                  
                            />
                            <br /><br />  
                            4. <label htmlFor="hel">Хэлний мэдлэг : </label>  
                            <br /><br />   
                            <input type="checkbox" name="lang1" 
                                id="English"                                 
                                onChange={(e) => setLan1(e.target.value)}
                                />  
                            English  
                            <input type="checkbox" name="lang2" 
                                id="Korean"                                 
                                onChange={(e) => setLan2(e.target.value)}
                                />  
                            Korean  
                            <input type="checkbox" name="lang3" 
                                id="Japan" 
                                onChange={(e) => setLan3(e.target.value)}
                                />
                            Japan  
                            <br /><br />  
                            <label htmlFor="things">Бүрдүүлэх материал:  </label>  
                            <br /><br />
                            1.<input  
                                type="text"
                                name="material1"
                                id="things1"
                                placeholder="Бүрдүүлэх материал оруулна уу" 
                                onChange={(e) => setMaterial1(e.target.value)}

                                  
                            />
                            <br /><br />
                            2.<input  
                                type="text"
                                name="material2"
                                id="things2"
                                placeholder="Бүрдүүлэх материал оруулна уу" 
                                onChange={(e) => setMaterial2(e.target.value)}

                                  
                            />
                            <br /><br />
                            3.<input  
                                type="text"
                                name="material3"
                                id="things3"
                                placeholder="Бүрдүүлэх материал оруулна уу"
                                onChange={(e) => setMaterial3(e.target.value)}
 
                                  
                            />
                            <br /><br />

                            <label htmlFor="url">Тэтгэлэгийн холбоос :</label>  
                            <input  
                                type="url" 
                                name="url" 
                                id="url" 
                                placeholder="Enter url" 
                                onChange={(e) => setUrl(e.target.value)}

                                  
                            />  
                            <br /><br />   
                            <button type="submit" value="Submit">Submit</button>
                            <Link to = "/Organization_success">Буцах</Link>
                        </form>
                        
                </fieldset>  
            </div>  
        );  
    }  
       
    export default AddScholarship; 