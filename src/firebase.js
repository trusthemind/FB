import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdYMOTuCU-fqniYCe6nrDeCRVebEEt1Vc",
  authDomain: "auth-app-24.firebaseapp.com",
  projectId: "auth-app-24",
  storageBucket: "auth-app-24.appspot.com",
  messagingSenderId: "1092272436572",
  appId: "1:1092272436572:web:b8fe480f1a7d19b14b7d99",
  measurementId: "G-PX3E6WYDGF"
};

const app = initializeApp(firebaseConfig);

// AUTH 
export const auth = getAuth(app)

// LOG OUT
export const logOut = async () => {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
}