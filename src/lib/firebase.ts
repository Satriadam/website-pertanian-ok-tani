import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDYDxI6BqQOGPPKhvtKQJtXxXhLQfZQVxY",
  authDomain: "lovable-garden.firebaseapp.com",
  projectId: "lovable-garden",
  storageBucket: "lovable-garden.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Add error handling for initialization
auth.onAuthStateChanged((user) => {
  console.log("Auth state changed:", user ? "User logged in" : "User logged out");
});