import React, { useEffect , useState } from 'react'
import { getDocs , collection , deleteDoc , doc } from "firebase/firestore";
import { auth, db } from "./firebase";

function Home({Auth}) {
  const [postList, setPostList] = useState([]);
  const collectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () =>{
      const data = await getDocs(collectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postList.map((post) => {
        return <div className="post">
          <div className="postHead">
            <div className="title">
              <h3>{post.title}</h3>
            </div>
            <div className="deletePost">
            {Auth && post.author.id === auth.currentUser.uid && (
              <button onClick={()=>{
                deletePost(post.id)
                }}>
                <i className="fas fa-trash"></i></button>
                )}
            </div>
          </div>
          <div className="textContainer">
          <p>{post.post}</p>
          </div>
          <h4 className="authorName">Posted:@{post.author.name}</h4>
        </div>
      })}
    </div>
  );
}

export default Home