import React, { useContext, useEffect, useState } from "react";
import pic1 from "../assets/20230106_184536.jpg"
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Chats = () => {

    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);


    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
    
            return() => {
                unsub();
            }
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    console.log(Object.entries(chats))
    return (
        <div className="chats">
             {Object.entries(chats)?.map((chat) => (
                <div className="userChat" key={chat[0]}>
                <img src={chat[1].userInfo.photoURL} alt="" />
                <div className="userChatInfo">
                    <span className="name">{chat[1].userInfo.displayName}</span>
                    <span className="lastMessage">{chat[1].userInfo.lastMessage?.text}</span>
                </div>
            </div>
             ))}
        </div>
    )
}

export default Chats;