import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8iGqSc7cokkzIM7If43sDfxh0KAkLKQ",
  authDomain: "simple-notes-firebase-e3e91.firebaseapp.com",
  databaseURL: "https://simple-notes-firebase-e3e91.firebaseio.com",
  projectId: "simple-notes-firebase-e3e91",
  storageBucket: "simple-notes-firebase-e3e91.appspot.com",
  messagingSenderId: "623164422350",
  appId: "1:623164422350:web:0094f3b247f62c75d0789f",
  measurementId: "G-CTGB51SKX8",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
