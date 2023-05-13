import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Profile = () => {
    return (
        <div className="profile">
            <h4>Edit Profile</h4>
            <h4>Change Password</h4>
            <h4>Privacy and settings</h4>
            <h4>T&C</h4>
            <FontAwesomeIcon icon={faPowerOff} />
        </div>
    )
}

export default Profile;