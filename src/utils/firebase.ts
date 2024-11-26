import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTSmLcUROCtIKnV4Vpu-QfMDuyPEbRYow",
    authDomain: "vue-firebase-7ad0a.firebaseapp.com",
    projectId: "vue-firebase-7ad0a",
    storageBucket: "vue-firebase-7ad0a.firebasestorage.app",
    messagingSenderId: "86538314041",
    appId: "1:86538314041:web:dc856bca1b80cacc5a48e8"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };