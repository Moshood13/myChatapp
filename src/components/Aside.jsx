import React from "react";
import "../components/index.scss"
import Header from "./Header";
import Search from "./Search";
import Chats from "./Chats";

const Aside = () => {
    return (
        <div className="aside">
            <Header />
            <Search />
            <Chats />
        </div>
    )
}

export default Aside;