// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaB3pIm65x4cKZN3_G_jQxgfLTTY7VGCw",
  authDomain: "crypto-coin-58d91.firebaseapp.com",
  projectId: "crypto-coin-58d91",
  storageBucket: "crypto-coin-58d91.appspot.com",
  messagingSenderId: "773916292342",
  appId: "1:773916292342:web:35fcfd0bb51e6f5b7f28d7",
  measurementId: "G-872XXR68XV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
