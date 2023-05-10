import { faEllipsis, faUserPlus, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./input";
import { ChatContext } from "../context/ChatContext";



const Chat = () => {

    const { data } = useContext(ChatContext)
    return (
        <div className="chat">
            <div className="header">
                <span>{data.user?.displayName}</span>
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