import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIZuXhGdxHhnIHfvv4PAhYEVe9TELyTGk",
  authDomain: "ecommerce-zapatillas-d3f67.firebaseapp.com",
  projectId: "ecommerce-zapatillas-d3f67",
  storageBucket: "ecommerce-zapatillas-d3f67.appspot.com",
  messagingSenderId: "912863258656",
  appId: "1:912863258656:web:4c5d2f46bcb4d53819b445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
