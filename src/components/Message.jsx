import React, { useContext } from "react";
import pic1 from "../assets/20230106_184536.jpg"
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";



const Message = ({ message }) => {

    const { currentUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)

    return (
        <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
            <div className="messageContent">
                <div className="details">
                    <img src={
                        message.senderId === currentUser.uid
                            ? currentUser.photoURL :
                            data.user.photoURL
                    } alt="" />
                    
                </div>
                <div className="textDetails">
                    {message.img && <img src={message.img} alt="" />}
                    <p className="text">{message.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;