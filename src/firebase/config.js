import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQPMb5nW2A-tCeTPPO9esu9rtlwbfIaWk",
    authDomain: "firegram-d150b.firebaseapp.com",
    databaseURL: "https://firegram-d150b.firebaseio.com",
    projectId: "firegram-d150b",
    storageBucket: "firegram-d150b.appspot.com",
    messagingSenderId: "347234520563",
    appId: "1:347234520563:web:a8f3a7c84aad1c56a71686"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };



