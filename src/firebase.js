import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-sIAw1jmk-xuQKklHj3dyioYyQrf_Uy8",
  authDomain: "tanvir-yt-clone.firebaseapp.com",
  projectId: "tanvir-yt-clone",
  storageBucket: "tanvir-yt-clone.appspot.com",
  messagingSenderId: "372078233719",
  appId: "1:372078233719:web:aa7f0d2bb9b003db219e72",
  measurementId: "G-KF6QXG8G5J",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth()
