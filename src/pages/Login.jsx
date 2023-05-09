import React from "react";
import "../pages/index.scss";


const Login = () => {
    return (
        <div className="Login">
            <div className="formContainer">
                <div className="box">
                    <span className="logo">Talk-active</span>
                    <span className="title">Login</span>
                    <form >
                        <input type="email" placeholder="Email address" />
                        <input type="password" placeholder="Password" />
                        <button className="btn">Login</button>
                        <p>You don't have an account? Register </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;