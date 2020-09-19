import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC30XSC7P55lNz7VZ15FVDPE7IaaThNgHM",
  authDomain: "e-commerce-41fdd.firebaseapp.com",
  databaseURL: "https://e-commerce-41fdd.firebaseio.com",
  projectId: "e-commerce-41fdd",
  storageBucket: "e-commerce-41fdd.appspot.com",
  messagingSenderId: "1016946142561",
  appId: "1:1016946142561:web:9781f13bcc015cfa5de920",
  measurementId: "G-Y6HKJCHC4Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
