import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNDVkVgEGm3LuVBwgiV4YH96JW60PlBrA",
    authDomain: "genius-car-services-3045a.firebaseapp.com",
    projectId: "genius-car-services-3045a",
    storageBucket: "genius-car-services-3045a.appspot.com",
    messagingSenderId: "964933861208",
    appId: "1:964933861208:web:82c84040e4698f50aa6f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;