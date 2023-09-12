import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get } from "firebase/database"
import { getAuth } from "firebase/auth"
import { async } from "q";

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

export const countMessages = async () => {
  const messagesRef = ref(database, "messages");
  const count = await get(messagesRef).then((snapshot) => {
    return snapshot.size;
  });
  return count;
};

export const sendMessage = async (username, textvalue) => {
  let temp = await countMessages() + 1;
  set(ref(database, `messages/ + ${temp}`), {
    username: username,
    value: textvalue,
  });
}