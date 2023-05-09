import { faPowerOff, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pic1 from "../assets/20230106_184536.jpg"



const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Talk-active</span>
            <div className="user">
                <img src={pic1} alt="" />
                <span>Moshood</span>
                <button>
                    <FontAwesomeIcon icon={faPowerOff} className="icon" />
                </button>
            </div>
        </div>
    )
}

export default Navbar;