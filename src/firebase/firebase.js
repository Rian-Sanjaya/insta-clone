import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkh67Q6IEvlEkR-Y7VZhm07sBExjUBL7I",
  authDomain: "insta-clone-ec933.firebaseapp.com",
  projectId: "insta-clone-ec933",
  storageBucket: "insta-clone-ec933.appspot.com",
  messagingSenderId: "41170906215",
  appId: "1:41170906215:web:287526a83105cff38138c2",
  measurementId: "G-M6W8HVPD0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }