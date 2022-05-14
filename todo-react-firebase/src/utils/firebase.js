import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA19cdZQxPreq39WZwRVdd-vPcRfVwvMOU",
    authDomain: "todo-notas-5c57a.firebaseapp.com",
    projectId: "todo-notas-5c57a",
    storageBucket: "todo-notas-5c57a.appspot.com",
    messagingSenderId: "55378585465",
    appId: "1:55378585465:web:232c86c8ce9611e28971a8"
  };

  export default firebase.initializeApp(firebaseConfig);