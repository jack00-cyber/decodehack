// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // or getFirestore if using Firestore


 const firebaseConfig = {
  apiKey: "AIzaSyCEVmAnEkTHkTHzz7soNf1Q_qcFHBlZcbs",
  authDomain: "ecosys-133d0.firebaseapp.com",
  databaseURL: "https://ecosys-133d0-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "ecosys-133d0",
  storageBucket: "ecosys-133d0.firebasestorage.app",
  messagingSenderId: "1000392374400",
  appId: "1:1000392374400:web:8a82379f764c7a9f5cce65",
  measurementId: "G-GSSEW19J7Z"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Or getFirestore(app)

export { database };