import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyDXMIe9CTVtcuGf0_ltGIq9UsdkN4Pi0jg",
    authDomain: "onyokapp-db17a.firebaseapp.com",
    projectId: "onyokapp-db17a",
    storageBucket: "onyokapp-db17a.appspot.com",
    messagingSenderId: "738298707043",
    appId: "1:738298707043:web:726cd73db4fa2fc97a4c56"
  };
const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref()