import  firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDU4GKWiDCBSzeMrSSyB2g5sqvXbQzDsA",
    authDomain: "twoggele.firebaseapp.com",
    projectId: "twoggele",
    storageBucket: "twoggele.appspot.com",
    messagingSenderId: "439221999901",
    appId: "1:439221999901:web:9c268a9a2fb331505129f4",
    measurementId: "G-5ZYXMPKKC8"
  };
  

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage()

export { db, storage }