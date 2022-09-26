import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbxEWQqynUAjvIqKFGYavD-8D3R6ulIHk",
  authDomain: "clone-ee354.firebaseapp.com",
  projectId: "clone-ee354",
  storageBucket: "clone-ee354.appspot.com",
  messagingSenderId: "1046929389406",
  appId: "1:1046929389406:web:ae9f36136f4472679b01cf",
  measurementId: "G-3YZ70144C6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
