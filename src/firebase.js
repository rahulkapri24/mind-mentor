import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCTdsvJq4yOD6LAC-o9sktZByOX0_uWYO8",
    authDomain: "mind-mentor-1fcc1.firebaseapp.com",
    projectId: "mind-mentor-1fcc1",
    storageBucket: "mind-mentor-1fcc1.appspot.com",
    messagingSenderId: "771207098542",
    appId: "1:771207098542:web:3728f0c11f5ba8395abd3f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };