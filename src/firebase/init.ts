import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjlyQ4FNGkZ_RJO8C7XlvlFI857-SAto4",
  authDomain: "vmr-blog.firebaseapp.com",
  projectId: "vmr-blog",
  storageBucket: "vmr-blog.appspot.com",
  messagingSenderId: "132750076504",
  appId: "1:132750076504:web:f02300baa757e98634f82d",
};


const app = initializeApp(firebaseConfig);
const database = getDatabase();
const firestore = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export { app, firestore, storage, auth,database };
