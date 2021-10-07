// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZjaMGfI_QRYjcegykKbcEBCbHT1QcYNQ",
  authDomain: "clone-3a390.firebaseapp.com",
  projectId: "clone-3a390",
  storageBucket: "clone-3a390.appspot.com",
  messagingSenderId: "517821889178",
  appId: "1:517821889178:web:036c637fd2b15c69e23d23",
  measurementId: "G-2VFKYQYXX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);