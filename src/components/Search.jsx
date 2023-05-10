import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext";

const Search = () => {
    const [username, setUserName] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const { currentUser } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username)
        );
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err) {
            setErr(true)
        }
    }

    const handleKey = e => {
        e.code === "Enter" && handleSearch();

    } 
    const handleSelect = async (u) => {
        
        const combinedId = currentUser.uid > user.uid
         ? currentUser.uid + user.uid 
         : user.uid + currentUser.uid;

         dispatch({type: "CHANGE_USER", payload: u })
         
         try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if(!res.exists()) {
                await setDoc(doc(db, "chats", combinedId ), { messages: [] });

                await updateDoc(doc(db, "userChat", currentUser.uid), {
                  [combinedId + ".userInfo"]: {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL:user.photoURL
                  },
                  [combinedId + ".date"]: serverTimestamp()
                });
            }
         } catch (err) {}

         setUser(null);
         setUserName("")
    };
    return (
        <div className="search">
            <div className="search-container">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <input 
                type="search" 
                placeholder="Find a user" 
                onKeyDown={handleKey} 
                onChange={e => setUserName(e.target.value)} 
                value={username}
                />
            </div>
            {err && <span>User not found!</span> }
            {user && <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span className="name">{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search;