import  firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBukbhJ3xOtpt7uwZ5OdgJmuslFQ3kMj1I",
  authDomain: "edinbooster.firebaseapp.com",
  projectId: "edinbooster",
  storageBucket: "edinbooster.appspot.com",
  messagingSenderId: "989323676359",
  appId: "1:989323676359:web:9f8d2703f0d62923aa0ce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;