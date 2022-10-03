// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK5MY5cbEBC72ufMrX95YL82D-CaNb4GI",
  authDomain: "personal-website-9b2d6.firebaseapp.com",
  projectId: "personal-website-9b2d6",
  storageBucket: "personal-website-9b2d6.appspot.com",
  messagingSenderId: "692399378659",
  appId: "1:692399378659:web:8cc7d30b82e9c8a62535d6",
  measurementId: "G-D1XH1QZ72H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);