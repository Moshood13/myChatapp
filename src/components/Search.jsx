import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pic1 from "../assets/20230106_184536.jpg"


const Search = () => {
    return (
        <div className="search">
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="icon"/>
                <input type="search" name="search" id="search" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src={pic1} alt="" />
                <div className="userChatInfo">
                    <span className="name">Moshood</span>
                </div>
            </div>
        </div>
    )
}

export default Search;