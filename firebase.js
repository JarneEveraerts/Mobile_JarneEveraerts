// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgdHeMZmXhaQCLLsZNAnR7fuzjRwLwx04",
  authDomain: "mobile-jarneeveraerts.firebaseapp.com",
  databaseURL:
    "https://mobile-jarneeveraerts-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mobile-jarneeveraerts",
  storageBucket: "mobile-jarneeveraerts.appspot.com",
  messagingSenderId: "89548057631",
  appId: "1:89548057631:web:87355e9240773c3fc6792a",
  measurementId: "G-FSTQ2CBXSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Export Firebase Auth
const auth = getAuth(app);

// Export Firestore
const firestore = getFirestore(app);

export { auth, firestore };
