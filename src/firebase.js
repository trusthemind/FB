import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdYMOTuCU-fqniYCe6nrDeCRVebEEt1Vc",
  authDomain: "auth-app-24.firebaseapp.com",
  projectId: "auth-app-24",
  storageBucket: "auth-app-24.appspot.com",
  messagingSenderId: "1092272436572",
  appId: "1:1092272436572:web:b8fe480f1a7d19b14b7d99",
  measurementId: "G-PX3E6WYDGF",
  databaseURL: "https://auth-app-24-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

// DB
export const database = getDatabase(app)

// AUTH 
export const auth = getAuth(app)

// LOG OUT
export const logOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
}

export const sendMessage = (username, textvalue) => {
  // TODO have to fix a send messages
  set(ref(database, 'messages/ + 2'), {
    username: username,
    value: textvalue,
  });
}