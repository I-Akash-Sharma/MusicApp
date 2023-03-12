// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS5XUaRBP-aZv1Jt8Oo6qUPXisT0MsxaE",
  authDomain: "audioapp-82996.firebaseapp.com",
  projectId: "audioapp-82996",
  storageBucket: "audioapp-82996.appspot.com",
  messagingSenderId: "146920199073",
  appId: "1:146920199073:web:04c8e3b0fa777de47631e0",
  measurementId: "G-BZYZB5VFTF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };