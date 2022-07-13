import firebase from "firebase/app";

import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

// this things brigs all the things of firebase
// create a app 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaGTv2QBQbvN0ObDhHkfZJSj_4V1WqONQ",
  authDomain: "crawn-clothing-d299d.firebaseapp.com",
  projectId: "crawn-clothing-d299d",
  storageBucket: "crawn-clothing-d299d.appspot.com",
  messagingSenderId: "900397630510",
  appId: "1:900397630510:web:3d5ce3885ea35af4ae4bbf"
};

// Initialize Firebase


  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  export  firebase;