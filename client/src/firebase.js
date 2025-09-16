// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9659a.firebaseapp.com",
  projectId: "mern-blog-9659a",
storageBucket: "mern-blog-9659a.appspot.com",

  messagingSenderId: "435477309173",
  appId: "1:435477309173:web:7bcc588b83a8f6688c07bc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);