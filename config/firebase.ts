// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0IGCSTz9ipFCI4c50HAgZzC4vxGptPqE",
  authDomain: "uwc-2-5bc5d.firebaseapp.com",
  projectId: "uwc-2-5bc5d",
  storageBucket: "uwc-2-5bc5d.appspot.com",
  messagingSenderId: "523955447391",
  appId: "1:523955447391:web:eeab7d145b02d7791fddea",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const authentication = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, authentication, provider };
