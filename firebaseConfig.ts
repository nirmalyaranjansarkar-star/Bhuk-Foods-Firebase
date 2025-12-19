// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Config updated for Project ID: bhuk-foods-firebase-20251219
// Date: 2024-12-19

const firebaseConfig = {
  // TODO: Replace these placeholders with your actual config from Firebase Console
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "bhuk-foods-firebase-20251219.firebaseapp.com",
  projectId: "bhuk-foods-firebase-20251219",
  storageBucket: "bhuk-foods-firebase-20251219.appspot.com",
  messagingSenderId: "REPLACE_WITH_SENDER_ID",
  appId: "REPLACE_WITH_APP_ID",
  measurementId: "REPLACE_WITH_MEASUREMENT_ID"
};

// Initialize Firebase (Modular)
const app = initializeApp(firebaseConfig);

// Export services for use in components
export const storage = getStorage(app); 
export const db = getFirestore(app);

export default app;