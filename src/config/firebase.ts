// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCHq4OWKNgn0PNbdEvyPNEKtUtgBkvSeqM",
  authDomain: "yusufapp-a2c33.firebaseapp.com",
  projectId: "yusufapp-a2c33",
  storageBucket: "yusufapp-a2c33.appspot.com",
  messagingSenderId: "923359454529",
  appId: "1:923359454529:web:39f76f465ca212dca1adc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
