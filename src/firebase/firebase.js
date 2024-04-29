// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPHtYof7mlR4eq_hVl7WIJpPg9afqckdY",
  authDomain: "assinment10-497a5.firebaseapp.com",
  projectId: "assinment10-497a5",
  storageBucket: "assinment10-497a5.appspot.com",
  messagingSenderId: "789172964201",
  appId: "1:789172964201:web:a0527e15526bf0792b4bf8",
  databaseURL: "https://assinment10-497a5-default-rtdb.firebaseio.com/",
  signInFlow:"redirect"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app