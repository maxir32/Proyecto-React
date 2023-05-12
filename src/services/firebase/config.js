// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzPYB5Edarau9QdQqa7_s9mud48asp1g4",
  authDomain: "kelemterapeutico.firebaseapp.com",
  projectId: "kelemterapeutico",
  storageBucket: "kelemterapeutico.appspot.com",
  messagingSenderId: "290313457293",
  appId: "1:290313457293:web:f38a139ba133e079e01cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// esta referencia para que este disponible en toda la app