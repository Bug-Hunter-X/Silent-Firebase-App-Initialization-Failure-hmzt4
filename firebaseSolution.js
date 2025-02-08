import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SEND_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID", //Analytics is optional
};
try {
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  console.log('Firebase app initialized successfully');
} catch (error) {
  console.error('Firebase app initialization failed:', error);
  // Implement fallback mechanisms or user alerts here
}
