// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvzh6b-KqmS-2EOPDAxUIQYfVh8032RKk",
  authDomain: "ecommerce-nike.firebaseapp.com",
  projectId: "ecommerce-nike",
  storageBucket: "ecommerce-nike.appspot.com",
  messagingSenderId: "206453284404",
  appId: "1:206453284404:web:0f9417a0e0768fec0b7461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db