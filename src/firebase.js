import firebase from 'firebase';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyDIXzd00n4zzPYoxWvbg_OXBYics391-YY",
    authDomain: "shopping-cart-app-676e7.firebaseapp.com",
    projectId: "shopping-cart-app-676e7",
    storageBucket: "shopping-cart-app-676e7.appspot.com",
    messagingSenderId: "23533030123",
    appId: "1:23533030123:web:b42a37bb354a4c54844cae",
    measurementId: "G-5XJQLY5T1H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const storage = firebase.storage();
  const db = firebase.firestore();
  const fs = firebase

  export {auth, storage, db, fs}

  
