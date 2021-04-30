import firebase from "firebase";

const firebaseApp = firebase.initialiseApp({
  apiKey: "AIzaSyBunZGpdcNmEW5vNuYBJjpnzpyj93co1AU",
  authDomain: "clone-59088.firebaseapp.com",
  projectId: "clone-59088",
  storageBucket: "clone-59088.appspot.com",
  messagingSenderId: "173635366383",
  appId: "1:173635366383:web:b88dfefa52cb09980cda1a",
  measurementId: "G-D99KR7F40H"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth()


export{ auth };