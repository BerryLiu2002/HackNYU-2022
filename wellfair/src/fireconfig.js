import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTg02A_vIIskp908hCQytqcqkhuEW3wwY",
  authDomain: "hackathon-4971d.firebaseapp.com",
  projectId: "hackathon-4971d",
  storageBucket: "hackathon-4971d.appspot.com",
  messagingSenderId: "150936401025",
  appId: "1:150936401025:web:8781611c0561f0aa088980",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
