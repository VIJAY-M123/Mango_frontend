import React, { useState } from "react";
import "../Styles/Login.css"
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Mongo from "../Image/Mongo.PNG";
import Report1 from "../Report/Report1";
import Navbar from "../Navbar/Navbar";

export default function Login() {
    const navigate = useNavigate();
    

    const [Input, setInput] = useState({
        Email: "",
        Password: "",
    })
    const [loggedIn, setLoggedIn] = useState(false);

    console.log("Log",loggedIn);

    const Change = (e) => {
        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();

        const storedData = localStorage.getItem('Data');
        const formData = JSON.parse(storedData);
        console.log("Data",formData);

        if (Input && Input.Email === formData.Email && Input.Password === formData.Password) {
            // login successful
            console.log("True");
            setLoggedIn(true);
           
           
            console.log("Login Successful")
           
        } else {
            console.log("Login Failed");
        }
    }

    if (loggedIn) {

        console.log("Loggiin",Input.Email);
        const { Email } = Input;
       navigate("/report1",{state:{Email}})
        return <Navbar email={Input.Email}/>
      
      }

    return (
        <div>
            <div className="main">

                <div className="submain">
                    <div>
                        {/* <FaUserCircle size="40px"/> */}
                        <img src={Mongo} height={40} />
                    </div>
                    <div style={{ marginBottom: "40px", marginTop: "30px" }}>
                        <h2>Login</h2>
                    </div>
                    <div>
                        <input className="input" type="text" name="Email" placeholder="Email" value={Input.Email} onChange={Change} />
                    </div>
                    <div>
                        <input className="input" type="Password" name="Password" placeholder="Password" value={Input.Password} onChange={Change} />
                    </div>
                    <div>
                        <button className="button" onClick={submit}>Submit</button>
                    </div>
                    <div className="footer1">
                        <div style={{ marginLeft: "0px" }}>
                            <Link to="/forget">Forget Password?...</Link>
                        </div>
                        <div style={{ marginLeft: "70px" }}>
                            <Link to="/register">Create Account?...</Link>
                        </div>

                    </div>


                </div>


            </div>

        </div>

    );
}