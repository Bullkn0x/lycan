import firebase from "firebase";
const config = {
  apiKey: "AIzaSyB7oTudqHGCVpjCR5A_AH9A8RolgMuEKXc",
  authDomain: "lycan-47d23.firebaseapp.com",
  databaseURL: "https://lycan-47d23.firebaseio.com",
  projectId: "lycan-47d23",
  storageBucket: "lycan-47d23.appspot.com",
  messagingSenderId: "579925702031",
};

const fire = firebase.initializeApp(config);
export default fire;
