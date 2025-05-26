
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
// import { getAuth, type Auth } from "firebase/auth"; // Removed Firebase Auth
import { getFirestore, type Firestore } from "firebase/firestore";

// Firebase project configuration
// This configuration is still needed for other Firebase services like Firestore.
const firebaseConfig = {
  apiKey: "AIzaSyA81xctqqUwcURMfCOgxxnR34NwdlfyklM", // Ensure this API key has permissions for Firestore
  authDomain: "YOUR_AUTH_DOMAIN_CLERK_HANDLES_THIS_NOW", // This is illustrative; Clerk handles auth domain
  projectId: "948659266675",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// const auth: Auth = getAuth(app); // Firebase Auth instance removed
const db: Firestore = getFirestore(app); // Firestore instance remains

export { app, db }; // Export app and db (Firestore), auth removed
