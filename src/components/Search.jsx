import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pic1 from "../Assets/moshood.jpg"

const Search = () => {
    return (

        <div className="search">
            <div className="searchBox">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <input type="search" name="search" id="search" placeholder="search for a friend" className="input" />

            </div>

            <div className="searchResult">
                <img src={pic1} alt="" />
                <p>Moshood</p>
            </div>
        </div>
    )
}

export default Search;