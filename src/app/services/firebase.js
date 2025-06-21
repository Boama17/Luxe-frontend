// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5tWviqlBFD23iGsAiV44hGsuqojEQtmA",
  authDomain: "luxe-auth-296ff.firebaseapp.com",
  projectId: "luxe-auth-296ff",
  storageBucket: "luxe-auth-296ff.firebasestorage.app",
  messagingSenderId: "832238698807",
  appId: "1:832238698807:web:a26bf4367a5de7fa549ab2",
  measurementId: "G-YPH1JK9S7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;