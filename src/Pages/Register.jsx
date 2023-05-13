import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import "./index.scss"
import { faMultiply } from "@fortawesome/free-solid-svg-icons";


const Register = ({close}) => {
    
    return(
        <div className="register">
            <FontAwesomeIcon icon={faMultiply} className="close" onClick={close}  id="close" />
            <div className="text">
            <h1>Sign Up</h1>
            <p>Quick, Fast and Easy.</p>
            </div>

            <form >
                <input type="text" name="displayName" id="Fn" placeholder="Display Name"/>
                <input type="email" name="email" id="email" placeholder="Email Address" />
                <input type="password" name="password" id="password" placeholder="New Password" />
                <label htmlFor="image">
                    <FontAwesomeIcon icon={faImage} className="icon" /> upload an image
                <input type="file" name="image" id="image" style={{display: "none"}} />
                </label>
                <button className="btn">Sign Up</button>
            </form>
        </div>
    )
}


export default Register;