import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAiLYJZBgABiXMElrUTDYp-ZVJH3hA_2xE",
    authDomain: "react-apps-cursos-834d1.firebaseapp.com",
    projectId: "react-apps-cursos-834d1",
    storageBucket: "react-apps-cursos-834d1.appspot.com",
    messagingSenderId: "317507967613",
    appId: "1:317507967613:web:e9426616f2c6cd44faaf14"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}