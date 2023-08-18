import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjWQrV3ybSY7GJF2sT1b8TUsSb_at92qE",
  authDomain: "urlshrinkr.firebaseapp.com",
  projectId: "urlshrinkr",
  storageBucket: "urlshrinkr.appspot.com",
  messagingSenderId: "51282170592",
  appId: "1:51282170592:web:7d9fee043e0b2812e6b685",
  measurementId: "G-LN1C42BM0E"
};


initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
