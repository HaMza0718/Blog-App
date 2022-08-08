import React, { useEffect } from 'react'
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Post({ Auth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const collectionRef = collection(db, "posts")
  let navigate = useNavigate();

  const createPost = async() => {
    await addDoc(collectionRef, {title, post, 
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!Auth) {
      navigate("/login");
    }
  }, [Auth, navigate]);

  return (
    <div className="postPage">
    <div className="postContainer">
    <h1>Create Post</h1>
    <div className="inputGp">
      <label>Title:</label>
      <input type="text" placeholder="Title..."
      onChange={(e) => {
        setTitle(e.target.value);
      }} />
    </div>
    <div className="inputGp">
    <label>Post:</label>
    <textarea type="text" placeholder="Post..."
    onChange={(e) => {
        setPost(e.target.value) 
      }}/>
    </div>
    <button onClick={createPost}>Post</button>
    </div>
    </div>
  )
}

export default Post;