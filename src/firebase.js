import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhIsbgGJeKq7Oo4pzVbgPqfRy6nnlFuUw",
  authDomain: "blog-app-79323.firebaseapp.com",
  projectId: "blog-app-79323",
  storageBucket: "blog-app-79323.appspot.com",
  messagingSenderId: "988157228383",
  appId: "1:988157228383:web:321b69f5a0a39e4f2172ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();