import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzKBwOK_yxoV9JRb3NT822-0vebpiJTjQ",
  authDomain: "mymoney-33e6b.firebaseapp.com",
  projectId: "mymoney-33e6b",
  storageBucket: "mymoney-33e6b.appspot.com",
  messagingSenderId: "356481353625",
  appId: "1:356481353625:web:40ab26a4efd19cb1d43508",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();

export { projectFirestore };
