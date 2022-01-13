import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF2rGiNVMP95sme3KcavX_KTJri972EfU",
  authDomain: "challenge-88fbb.firebaseapp.com",
  databaseURL: "https://challenge-88fbb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "challenge-88fbb",
  storageBucket: "challenge-88fbb.appspot.com",
  messagingSenderId: "201106590795",
  appId: "1:201106590795:web:f75707649e14b29a0e91ce",
  measurementId: "G-0PBK4P3GBJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };