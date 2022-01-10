import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/storage';
firebase.initializeApp({
  apiKey: "AIzaSyCw_6XHUOBlUJsmPV97xciouw0RqARryts",
  authDomain: "instagram-app-clone-96f27.firebaseapp.com",
  projectId: "instagram-app-clone-96f27",
  storageBucket: "instagram-app-clone-96f27.appspot.com",
  messagingSenderId: "735614919296",
  appId: "1:735614919296:web:d303d473e9bae1e92cbc65",
  measurementId: "G-6MK3S16ZF7",
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};