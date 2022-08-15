import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firestoreConfig = {
  apiKey: "AIzaSyAmWFMTX_ffjIq8ujiINO6NF0weF5wLcyY",
  authDomain: "jwflix-c3df2.firebaseapp.com",
  projectId: "jwflix-c3df2",
  storageBucket: "jwflix-c3df2.appspot.com",
  messagingSenderId: "1015850862895",
  appId: "1:1015850862895:web:a9db22d43bbc9d011ff9da",
};

const app = initializeApp(firestoreConfig);
const db = getFirestore(app);

export default db;
