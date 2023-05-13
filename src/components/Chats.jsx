import React from "react";
import pic1 from "../Assets/moshood.jpg"


const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={pic1} alt="" />
                <div className="text">
                    <h3>Moshood</h3>
                    <span className="lastMessage">I'm Coming soon!</span>
                </div>
            </div>
        </div>
    )
}

export default Chats;