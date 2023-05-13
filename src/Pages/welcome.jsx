import React, { useState } from "react";
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import Register from "./Register";

const Welcome = () => {
    const [register, showRegister] = useState(false)
    return (
        <div className="welcome">

            <div className="container">
                <div className="header">
                    <h1>Purple <span className="talk">Talk</span> <span className="com">.com</span> </h1>
                </div>
                <div className="body">
                    <div className="content">
                        <h2> Welcome To</h2>
                        <h1 data-text="Purple Talk">
                            Purple Talk</h1>
                        <div className="text">
                            <p>Meet <FontAwesomeIcon icon={faHandshake} /></p>
                            <p>Add <FontAwesomeIcon icon={faUserPlus} /></p>
                            <p>Connect <FontAwesomeIcon icon={faCircleCheck} /></p>
                        </div>

                    </div>
                    <Login show = {() => showRegister(true)} />
                    {register ? (<Register close={() => showRegister(false)} />) : ""}
                </div>
            </div>

        </div>
    )
}

export default Welcome;