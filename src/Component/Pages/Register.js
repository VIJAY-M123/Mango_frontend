import React, { useState } from "react";
import "../Styles/Login.css";
import { FaUserCircle } from "react-icons/fa";
import Mongo from "../Image/Mongo.PNG";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate()

    const url = "http://localhost:4000/register"

    
    const [Data, setData] = useState({
        Username: "",
        Email: "",
        Password: "",


    })
    console.log(Data);

    const onChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })

        //setInput({...Input,[e.target.name]:e.target.value})

    }

    const submit = (e) => {
        e.preventDefault();

        navigate("report1");

        localStorage.setItem("Data", JSON.stringify(Data))

        // fetch(url, {
        //     method: 'POST',
        //     //mode: 'no-cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: Data.Username,

        //         email: Data.Email,
        //         password: Data.Password
        //     })
        // });

    }

    return (
        <div>
            <div className="main">

                <div className="submain">
                    <div>
                        {/* <FaUserCircle size="40px" /> */}
                        <img src={Mongo} height={40}/>
                    </div>
                    <div style={{marginBottom:"40px", marginTop:"30px"}}>
                        <h2>Register</h2>
                    </div>
                    <div>
                        <input className="input" type="text" name="Username" placeholder="Username" value={Data.Username} onChange={onChange} />
                    </div>
                    <div>
                        <input className="input" type="text" name="Email" placeholder="Email" value={Data.Email} onChange={onChange} />
                    </div>
                    <div>
                        <input className="input" type="Password" name="Password" placeholder="Password" value={Data.Password} onChange={onChange} />
                    </div>
                    <div>
                        <button className="button" onClick={submit}>Submit</button>
                    </div>


                </div>


            </div>

        </div>
    );
}