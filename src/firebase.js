// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD__H_IA4wJsx7Psdq7mbJazWxnDriX27M",
  authDomain: "wetindeysupapp.firebaseapp.com",
  projectId: "wetindeysupapp",
  storageBucket: "wetindeysupapp.appspot.com",
  messagingSenderId: "254622756025",
  appId: "1:254622756025:web:98cca6eca4fdcf03eaff68",
  measurementId: "G-KB325XMN0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;