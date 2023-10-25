// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZE_fT4AgtzNvxS8KVWME2NTWsVwtbKu4",
  authDomain: "prueba-tecnica-40853.firebaseapp.com",
  projectId: "prueba-tecnica-40853",
  storageBucket: "prueba-tecnica-40853.appspot.com",
  messagingSenderId: "964844093769",
  appId: "1:964844093769:web:3a16c66aca7dec74539a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const out = async () => {
  await signOut(auth);
};