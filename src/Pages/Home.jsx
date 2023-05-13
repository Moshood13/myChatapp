import React from "react";
import Aside from "../components/Aside";
import Chatbox from "../components/Chatbox";
import Menu from "../components/Menu";


const Home = () => {
    return (
        <div className="home">
            <Aside />
            <Chatbox />
            <Menu />
        </div>
    )
}


export default Home;