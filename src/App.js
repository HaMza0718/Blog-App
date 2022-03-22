import { signOut } from "firebase/auth";
import { useState } from "react";
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Post from "./Post";
import {auth} from "./firebase";

function App() {
  const[Auth , setAuth] = useState(localStorage.getItem("Auth"));

  const logOut = ()=> {
    signOut(auth).then (()=>{
      localStorage.clear();
      setAuth(false);
      window.location.pathname = "/login"
    })
  }

  return (
    <Router>
    <nav>
      <Link to="/"> Home </Link>
     {!Auth ? (<Link to="/login"> Login </Link> ) : (
       <>
       <Link to="/post"> Add Post </Link>
       <button className="logOut" onClick={logOut}>Log Out</button>
       </>
       )}
    </nav>
      <Routes>
        <Route path="/" element={<Home Auth={Auth} />} />
        <Route path="/post" element={<Post Auth={Auth}/>} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
