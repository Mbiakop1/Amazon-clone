import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChbJefbR91DqwB3fRK3shFsTMlWv5QXjM",
    authDomain: "clon-12f6a.firebaseapp.com",
    projectId: "clon-12f6a",
    storageBucket: "clon-12f6a.appspot.com",
    messagingSenderId: "477331241692",
    appId: "1:477331241692:web:5047775aa733d47de49219"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };