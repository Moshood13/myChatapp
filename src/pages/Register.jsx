import React from "react";
import "../pages/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
    return (
        <div className="register">
            <div className="formContainer">
                <div className="box">
                    <span className="logo">Talk-active</span>
                    <span className="title">Register</span>
                    <form >
                        <input type="text" placeholder="Display Name" />
                        <input type="email" placeholder="Email address" />
                        <label htmlFor="file">
                            <FontAwesomeIcon icon={faImage} className="icon"/>
                            add an image
                        <input style={{display: "none"}} type="file" name="image" id="file" />
                        </label>
                        <input type="password" placeholder="Password" />
                        <button className="btn">Submit</button>
                        <p>You already have an account? Login </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;