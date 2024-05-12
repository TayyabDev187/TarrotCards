// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpGv8qwP0wkLMBTEPFAOR6KOoIJWpkjq8",
    authDomain: "tarrotcards-1a2ec.firebaseapp.com",
    projectId: "tarrotcards-1a2ec",
    storageBucket: "tarrotcards-1a2ec.appspot.com",
    messagingSenderId: "87941296874",
    appId: "1:87941296874:web:4a49e1e1733ef3381bdd93",
    measurementId: "G-Z5HV0TN41K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };