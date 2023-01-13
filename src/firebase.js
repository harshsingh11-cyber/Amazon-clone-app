
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBgLSF1Dn_kFPTPusIBZiJ01y945x3U1V0",
  authDomain: "clone-app-4fc77.firebaseapp.com",
  projectId: "clone-app-4fc77",
  storageBucket: "clone-app-4fc77.appspot.com",
  messagingSenderId: "126411209698",
  appId: "1:126411209698:web:5ce5772834247d3b7157bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth };
export default db;
