import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5d_wcWV3Rvz2KpY_JgPWEUMSZdRs4ci0",
    authDomain: "resep-7f82a.firebaseapp.com",
    projectId: "resep-7f82a",
    storageBucket: "resep-7f82a.firebasestorage.app",
    messagingSenderId: "160997086643",
    appId: "1:160997086643:web:20ac8dc5f9c5d49652e7c6"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };