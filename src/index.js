import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDQbfb_3E5JhPIaSqi_c0lV0mAS9zuN5Qk",
  authDomain: "acabest-1b634.firebaseapp.com",
  databaseURL: "https://acabest-1b634.firebaseio.com",
  projectId: "acabest-1b634",
  storageBucket: "acabest-1b634.appspot.com",
  messagingSenderId: "903642818126",
  appId: "1:903642818126:web:1cbe9e4084ca826f01451f",
  measurementId: "G-LNH8F1F4NX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    // User is signed out.
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUserId");
  }
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
