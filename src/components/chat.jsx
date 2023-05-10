import { faEllipsis, faUserPlus, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Messages from "./MessageBox";
import Input from "./input";



const Chat = () => {
    return (
        <div className="chat">
            <div className="header">
                <span>Moshood</span>
                <div className="icons">
                    <FontAwesomeIcon icon={faVideo} className="icon" />
                    <FontAwesomeIcon icon={faUserPlus} className="icon" />
                    <FontAwesomeIcon icon={faEllipsis} className="icon" />
                </div>
            </div>

            <Messages />
            <Input />
        </div>
    )
}

export default Chat;