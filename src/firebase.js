import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBVH-A2mXJ1JEm3iOeN0KXDLGuwX38uAvU",
    authDomain: "disneyplus-clone-1e5ab.firebaseapp.com",
    projectId: "disneyplus-clone-1e5ab",
    storageBucket: "disneyplus-clone-1e5ab.appspot.com",
    messagingSenderId: "1035499228909",
    appId: "1:1035499228909:web:ec0136c67f14ac820446e4",
    measurementId: "G-9FDXBW64LE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;