// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADM5uUH6Acerhpa498NtJWURIT13fjzSE",
  authDomain: "realtor-clone-react-e7ab6.firebaseapp.com",
  projectId: "realtor-clone-react-e7ab6",
  storageBucket: "realtor-clone-react-e7ab6.appspot.com",
  messagingSenderId: "283751398213",
  appId: "1:283751398213:web:a0ec6f3888965ada6f1c2c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore()