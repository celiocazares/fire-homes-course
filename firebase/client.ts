// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {Auth, getAuth} from "firebase/auth";
import {FirebaseStorage, getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwUQ02KSosCKtEatBLeAzLQ4mpGkm0-7o",
  authDomain: "fire-homes-course-8ca3a.firebaseapp.com",
  projectId: "fire-homes-course-8ca3a",
  storageBucket: "fire-homes-course-8ca3a.firebasestorage.app",
  messagingSenderId: "955870530832",
  appId: "1:955870530832:web:f8e3c2872739408ee46995"
};

// Initialize Firebase
const currentApps =  getApps();
let auth: Auth;
let storage: FirebaseStorage;

if(!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);

} else {
  const app = currentApps[0];
  auth = getAuth(app); 
  storage = getStorage(app);
}

export {auth, storage};


