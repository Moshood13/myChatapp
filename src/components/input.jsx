import { faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = () => {
    return (
        <div className="input">
            <input type="text" name="message" id="message" placeholder="Send a message" />
            <div className="send">
                <FontAwesomeIcon icon={faPaperclip} className="icon" />
                <input type="file" name="file" id="file" style={{display: "none"}} />
                <label htmlFor="file">
                    <FontAwesomeIcon icon={faImage} className="icon" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input;