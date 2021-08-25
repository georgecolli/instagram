import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDsIlgYoAj5lC8kJrExF3WzvvI5VL3YBg8",
  authDomain: "sinstagram-00.firebaseapp.com",
  projectId: "sinstagram-00",
  storageBucket: "sinstagram-00.appspot.com",
  messagingSenderId: "572869062266",
  appId: "1:572869062266:web:513854135db823ed09d5c3",
  measurementId: "G-HD4GHR9F3E"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
