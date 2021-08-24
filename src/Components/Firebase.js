import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQZodDAAW4W9ciDTuOsz2xsz1eBHmubqw",
  authDomain: "messenger-ee94e.firebaseapp.com",
  projectId: "messenger-ee94e",
  storageBucket: "messenger-ee94e.appspot.com",
  messagingSenderId: "173215815779",
  appId: "1:173215815779:web:810a48b0bc70829e3d0056",
  measurementId: "G-D2Q50PTDW3",
});

const db = firebaseApp.firestore();

export default db;
