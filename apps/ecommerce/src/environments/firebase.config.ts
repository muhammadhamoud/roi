// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmnJ8U-dZxmgJYrVpnNJL8y0rnJAVNYHs",
  authDomain: "ecommerce-7197d.firebaseapp.com",
  projectId: "ecommerce-7197d",
  storageBucket: "ecommerce-7197d.appspot.com",
  messagingSenderId: "884413734571",
  appId: "1:884413734571:web:ee5de4e265044c0c17a1ee",
  measurementId: "G-RPY3QXMTJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);