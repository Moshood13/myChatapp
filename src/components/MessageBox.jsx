import React from "react";
import pic1 from "../assets/20230106_184536.jpg"


const Messages = () => {
    return (
        <div className="messages">
            <div className="owner">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="text">
                    <span>How are you</span>
                </div>
            </div>
            <div className="receiver">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="text">
                    <span>How are you</span>
                </div>
            </div>
            <div className="owner">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="text">
                    <span>How are you</span>
                </div>
            </div>
            <div className="receiver">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="text">
                    <span>How are you</span>
                </div>
            </div>
            <div className="owner">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="text">
                    <span>How are you</span>
                </div>
            </div>
            <div className="receiver">
                <div className="details">
                    <img src={pic1} alt="" />
                    <span>just now</span>
                </div>
                <div className="text">
                    <span>How are you</span>
                </div>
            </div>
        </div>
    )
}

export default Messages;