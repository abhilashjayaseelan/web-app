import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHODVoYck557JiA2f7xUfOuab5YayTIYM",
  authDomain: "web-app-9c450.firebaseapp.com",
  databaseURL: "https://web-app-9c450-default-rtdb.firebaseio.com",
  projectId: "web-app-9c450",
  storageBucket: "web-app-9c450.appspot.com",
  messagingSenderId: "892299408455",
  appId: "1:892299408455:web:7f09962cee716b951ded62",
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
