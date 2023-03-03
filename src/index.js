import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGSJYLGS5COy6m0l0dBRDtnjfnPY0WVY8",
  authDomain: "cart-c24e5.firebaseapp.com",
  projectId: "cart-c24e5",
  storageBucket: "cart-c24e5.appspot.com",
  messagingSenderId: "662829271650",
  appId: "1:662829271650:web:007fffde6fb469c01e5f3b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
