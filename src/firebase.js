import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbOfS69rwxEz9AASnh_PQyHlHcZRcs0-E",
  authDomain: "lead-management-36cec.firebaseapp.com",
  projectId: "lead-management-36cec",
  storageBucket: "lead-management-36cec.appspot.com",
  messagingSenderId: "854412744116",
  appId: "1:854412744116:web:641300375a3e79285f4ee1",
  measurementId: "G-J10H48DSZP"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
