// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGffsQ7L1zlo0x2k0DVZ2XmmcVcpA2KeA",
  authDomain: "portfolio-bb607.firebaseapp.com",
  projectId: "portfolio-bb607",
  storageBucket: "portfolio-bb607.firebasestorage.app",
  messagingSenderId: "369699575400",
  appId: "1:369699575400:web:1ea92c206e02219a4ccddd",
  measurementId: "G-W3JJ9JDKSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);