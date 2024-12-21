import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYDxI6BqQOGPPKhvtKQJtXxXhLQfZQVxY", // This should be replaced with your actual Firebase API key
  authDomain: "lovable-garden.firebaseapp.com",
  projectId: "lovable-garden",
  storageBucket: "lovable-garden.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

let auth;
let googleProvider;

try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  googleProvider = new GoogleAuthProvider();

  // Add error handling for initialization
  auth.onAuthStateChanged((user) => {
    console.log("Auth state changed:", user ? "User logged in" : "User logged out");
  });

  // Log initialization success
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
  throw new Error("Failed to initialize Firebase. Please check your configuration.");
}

export { auth, googleProvider };