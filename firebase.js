// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';

import "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaW5GX1l3vbLgSmitXYFnsNQkQGnM4cBU",
  authDomain: "rn-car-clone.firebaseapp.com",
  projectId: "rn-car-clone",
  storageBucket: "rn-car-clone.appspot.com",
  messagingSenderId: "659238182795",
  appId: "1:659238182795:web:0fb2aa023ac43cda2d198e",
  measurementId: "G-PT1EG1BWBW"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


const db = firebase.firestore()

export {firebase, db}