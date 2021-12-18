import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzLSTBSpuDwaX732lPyjlE5TpHakisnuk",
    authDomain: "house-marketplace-app-656ae.firebaseapp.com",
    projectId: "house-marketplace-app-656ae",
    storageBucket: "house-marketplace-app-656ae.appspot.com",
    messagingSenderId: "913462363677",
    appId: "1:913462363677:web:b0df63a4681084323d68f4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();