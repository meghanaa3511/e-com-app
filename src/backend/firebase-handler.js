// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCo7H066QU-KsLwzLc0TxiofJm0NxqaA1A",
  authDomain: "test-project-5dc2b.firebaseapp.com",
  databaseURL: "https://test-project-5dc2b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-project-5dc2b",
  storageBucket: "test-project-5dc2b.appspot.com",
  messagingSenderId: "6472979986",
  appId: "1:6472979986:web:8a54823138d51a7662aacb",
  measurementId: "G-9K25R9N896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
export const firebaseDatabase = getDatabase(app);