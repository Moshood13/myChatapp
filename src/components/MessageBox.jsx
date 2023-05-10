import React from "react";
import pic1 from "../assets/20230106_184536.jpg"


const Messages = () => {
    return (
        <div className="messages">
            <div className="message owner">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="textDetails">
                     <img src={pic1} alt="" /> 
                    <p className="text">How are you?</p>
                </div>
            </div>
        </div>
    )
}

export default Messages;