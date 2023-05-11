import React, { useState } from "react";
import "../pages/index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()


  const submitForm = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);


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
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, "userChat", res.user.uid), {});

            navigate("/")
          });
        }
      );

    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className="register">
      <div className="formContainer">
        <div className="box">
          <span className="logo">Talk-active</span>
          <span className="title">Register</span>
          <form onSubmit={submitForm}>
            <input type="text" placeholder="Display Name" />
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Password" />
            <label htmlFor="file">
              <FontAwesomeIcon icon={faImage} className="icon" />
              add an image
              <input style={{ display: "none" }} type="file" name="image" id="file" />
            </label>
            <button className="btn">Submit</button>
            {err && <span>Something went wrong</span>}
            <p>You already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;