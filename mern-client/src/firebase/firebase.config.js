// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYn9x3MFax67O6z0lEUbaSg8iejKPzv1w",
  authDomain: "mern-book-inventory-f2b9a.firebaseapp.com",
  projectId: "mern-book-inventory-f2b9a",
  storageBucket: "mern-book-inventory-f2b9a.appspot.com",
  messagingSenderId: "686755810034",
  appId: "1:686755810034:web:099819c4e7fa7b39d25e6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app