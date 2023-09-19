import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcYJ4IRrkeozcLMu4gcS2yKL-jHjXBHFU",
  authDomain: "planet-fd04e.firebaseapp.com",
  projectId: "planet-fd04e",
  storageBucket: "planet-fd04e.appspot.com",
  messagingSenderId: "26885291233",
  appId: "1:26885291233:web:2705beba06e5b647a4cba0",
  measurementId: "G-2PVYV031BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
