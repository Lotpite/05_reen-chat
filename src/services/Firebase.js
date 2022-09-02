import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCWcVwSn5wq-OQdS8SZHEThCIWqDafnw1o",
  authDomain: "reen-chat-99d72.firebaseapp.com",
  projectId: "reen-chat-99d72",
  storageBucket: "reen-chat-99d72.appspot.com",
  messagingSenderId: "591578984",
  appId: "1:591578984:web:a9230898ca0e73932338dd",
  measurementId: "G-89RKRSSLNT"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



  