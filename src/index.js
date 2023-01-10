import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2qs1Q7pMET5AbKfMeEPw-EXwD1guU4XA",
  authDomain: "sneakshoes-c2e03.firebaseapp.com",
  projectId: "sneakshoes-c2e03",
  storageBucket: "sneakshoes-c2e03.appspot.com",
  messagingSenderId: "626104003283",
  appId: "1:626104003283:web:f7a92695bf86509c3bc226"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
