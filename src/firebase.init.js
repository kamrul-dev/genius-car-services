// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClhdKFHZlRB0JaVosUkEuCdZXFdRcP4Y4",
    authDomain: "genius-car-services-76e16.firebaseapp.com",
    projectId: "genius-car-services-76e16",
    storageBucket: "genius-car-services-76e16.appspot.com",
    messagingSenderId: "299605688494",
    appId: "1:299605688494:web:3fc392d4c845c84428ed3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;