import { faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const {data} = useContext(ChatContext);
    const { currentUser } =useContext(AuthContext)

    const handleSend = async () => {
        if(img) {
            const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (err) => {
        // setErr(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                    img: downloadURL
                })
            })

        });
      }
    );

        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()
                })
            })
        }

        await updateDoc(doc(db, "userChat", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"] : serverTimestamp(),
        })
        await updateDoc(doc(db, "userChat", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"] : serverTimestamp(),
        })

        setText("")
        setImg(null)
    }

    return (
        <div className="input">
            <input type="text"
             name="message" 
             id="message"
             placeholder="Send a message"
             onChange={e=> setText(e.target.value)}
             value={text}
            />
            <div className="send">
                <FontAwesomeIcon icon={faPaperclip} className="icon" />
                <input type="file" name="file" id="file" style={{ display: "none" }}
                 onChange={e=> setImg(e.target.files[0])} 
                
                 />
                <label htmlFor="file">
                    <FontAwesomeIcon icon={faImage} className="icon" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    ) 
}

export default Input;