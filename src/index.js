import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKbMvmU_lOyAUrlVaaiQoFmeiSoo_-QxQ",
  authDomain: "oscar-fb1.firebaseapp.com",
  projectId: "oscar-fb1",
  storageBucket: "oscar-fb1.appspot.com",
  messagingSenderId: "638704825449",
  appId: "1:638704825449:web:d17547ac0e5362a3f75ef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//aca termino el codigo para conectar a firebase


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
