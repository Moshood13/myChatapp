import React, { useState } from "react";
import "../components/index.scss"
import pic1 from "../Assets/moshood.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import Profile from "./Profile";

const Header = () => {
    const [profile, setShowProfile] = useState(false)

    const showProfile = () => {
        setShowProfile(true)
    }

    return (
        <div className="header">
            <div className="user">
                <div className="logo">
                    <h1>Purple Talk</h1>
                </div>


                <div className="userText">
                    <img src={pic1} alt="" />
                    <p>Moshood</p>
                    <FontAwesomeIcon icon={faCircleChevronDown} className="icon" />
                    <FontAwesomeIcon icon={faCircleChevronUp} className="icon" />
                </div>
            </div>
            <div className="userProfile">
                {profile ? <Profile /> : ''} 
            </div>
        </div>
    )
}

export default Header;