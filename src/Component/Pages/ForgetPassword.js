import React from "react";
import "../Styles/Login.css"
import {FaUserCircle} from "react-icons/fa";
import Mongo from "../Image/Mongo.PNG";

export default function Forget(){
    return(
        <div>
            <div className="main">

                <div className="submain">
                    <div>
                      {/* <FaUserCircle size="40px"/> */}
                      <img src={Mongo} height={40}/>
                    </div>
                    <div style={{marginBottom:"40px", marginTop:"30px"}}>
                     <h2>Forget Password</h2>
                    </div>
                    <div>
                     <input className="input" type="text" placeholder="Username"/>
                    </div>
                    <div>
                     <input className="input" type="text" placeholder="Email"/>
                    </div>
                    <div>
                     <input className="input" type="Password" placeholder="Password"/>
                    </div>
                    <div>
                     <input className="input" type="Password" placeholder="Confirm Password"/>
                    </div>
                    <div>
                        <button className="button">Submit</button>
                    </div>
                  

                </div>
               

            </div>

        </div>
    );
}