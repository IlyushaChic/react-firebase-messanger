import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';





firebase.initializeApp({
  apiKey: "AIzaSyCc3jlqk4Z8oEdCvcoAw9yv02371IkWqKc",
  authDomain: "chat-react-45fbd.firebaseapp.com",
  projectId: "chat-react-45fbd",
  storageBucket: "chat-react-45fbd.appspot.com",
  messagingSenderId: "48614194188",
  appId: "1:48614194188:web:443f6ff0e92459b32e0229",
  measurementId: "G-ME0SHEPXVS"
});


export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  } } >
     <App />
  </Context.Provider>
);

