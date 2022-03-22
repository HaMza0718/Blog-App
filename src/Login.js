import React from 'react'
import { auth, provider } from "./firebase";
import { signInWithPopup } from  "firebase/auth";
import { useNavigate} from "react-router-dom";

function Login({setAuth}) {
  let navigate = useNavigate();

    const signInWithGoogle = () =>{
        signInWithPopup (auth, provider).then((result) =>{
        localStorage.setItem("Auth", true);  
        setAuth(true);
        navigate("/");
        })
    };
  return (
    <div className="loginPage">
        <p>Sign In With Google to Continue!</p>
        <button className="loginButton" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i> Sign In With Google</button>
    </div>
  )
}

export default Login;