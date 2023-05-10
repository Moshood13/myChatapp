import React from "react";
import pic1 from "../assets/20230106_184536.jpg"

const Chats = () => {
    return (
        <div className="chats">
             <div className="userChat">
                <img src={pic1} alt="" />
                <div className="userChatInfo">
                    <span className="name">Moshood</span>
                    <span className="lastMessage">Hello</span>
                </div>
            </div>
        </div>
    )
}

export default Chats;