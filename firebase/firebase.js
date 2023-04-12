import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaDtUw817eZrgiBbxlHe4MsQzi2WhVqnM",
  authDomain: "chiquechick-165de.firebaseapp.com",
  projectId: "chiquechick-165de",
  storageBucket: "chiquechick-165de.appspot.com",
  messagingSenderId: "846011570259",
  appId: "1:846011570259:web:2598e112bb3cc9fb400ea6",
  measurementId: "G-KZWHV36ECT"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
