import React, { useState } from "react";
import "../pages/index.scss";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();


    const submitForm = async (e) => {
        e.preventDefault();


        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")

        } catch (err) {
            setErr(true)
        }
    };


    return (
        <div className="Login">
            <div className="formContainer">
                <div className="box">
                    <span className="logo">Talk-active</span>
                    <span className="title">Login</span>
                    <form onSubmit={submitForm}>
                        <input type="email" placeholder="Email address" />
                        <input type="password" placeholder="Password" />
                        <button className="btn">Login</button>
                        {err && <span>Invalid login details </span> }
                        <p>You don't have an account? <Link to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;