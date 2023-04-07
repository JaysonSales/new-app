import React,{useState} from "react";
import "./loginform.css";

const LoginForm = () => {

    const[failedLogin, failedPopup] = useState("hide")
    const failed = () =>{
        failedPopup("login-popup")
        setTimeout(() => failedPopup("hide"), 3000)
    }

    const[commingSoon, soonPopup] = useState("hide")
    const soon = () =>{
        soonPopup("soon-popup")
        setTimeout(() => soonPopup("hide"), 3000)
    }

    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="login-btn" onClick={failed}>Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook" onClick={soon}></div>
                <div className="google" onClick={soon}></div>
            </div>

            <div>
                <p>Don't have an account?</p><div className="register" onClick={event =>  window.location.href="../components/register.js"}>Register now.</div>
            </div>


            <div className={failedLogin}>
                <h3>Login Failed</h3>
                <p>Username or password is incorrect.</p>
            </div>

            <div className={commingSoon}>
                <h3>Unable to perform this action.</h3>
                <p>This feature is comming soon.</p>
            </div>


        </div>
    )
}

        export default LoginForm