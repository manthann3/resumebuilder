import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
firebase.initializeApp({
    // apiKey: "AIzaSyBPSX0c2tn0n17maq7qfdOK_EeOrKW4cVc",
    // authDomain: "resume-builder-new-449a2.firebaseapp.com",
    // projectId: "resume-builder-new-449a2",
    // storageBucket: "resume-builder-new-449a2.appspot.com",
    // messagingSenderId: "656587896267",
    // appId: "1:656587896267:web:9d3483093084362dc4724e"
    apiKey: "AIzaSyBGud6bI0guQCOME3cbHVHoBN886Off0kY",
    authDomain: "resume-builder-b1d58.firebaseapp.com",
    databaseURL: "https://resume-builder-b1d58-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "resume-builder-b1d58",
    storageBucket: "resume-builder-b1d58.appspot.com",
    messagingSenderId: "252064734842",
    appId: "1:252064734842:web:40e381bb1999d10e0ba5c3",
    measurementId: "G-VG8QTDN1Z4"
});
export default firebase;
