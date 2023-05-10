import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import pic1 from "../assets/20230106_184536.jpg"
import { signOut } from "firebase/auth"
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";



const Navbar = () => {
    const { currentUser } = useContext(AuthContext);


    return (
        <div className="navbar">
            <span className="logo">Talk-active</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)} >
                    <FontAwesomeIcon icon={faPowerOff} className="icon" />
                </button>
            </div>
        </div>
    )
}

export default Navbar;