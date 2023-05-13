import React from "react";


const Login = ({show}) => {
    return(
        <div className="login">
            <div className="text">
            <h1>Login</h1>
            </div>
            <form >
                <input type="email" name="email" id="email" placeholder="Email Address" />
                <input type="password" name="password" id="password" placeholder="Password" />
                <button className="btn">Login</button>
            </form>
            <p>Forgot Password?</p>
            <button className="cna" onClick={show}>Create New Account</button>
        </div>
    )
}


export default Login;