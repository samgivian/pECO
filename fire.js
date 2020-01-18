import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAgWzSXP7LHhUjEy2DiHH_2ypE0wVAFXp4",
  authDomain: "peco-dfbe5.firebaseapp.com",
  databaseURL: "https://peco-dfbe5.firebaseio.com",
  projectId: "peco-dfbe5",
  storageBucket: "peco-dfbe5.appspot.com",
  messagingSenderId: "644045971636",
  appId: "1:644045971636:web:f3604a44a641757ab4b7e1",
  measurementId: "G-B8ZPHGTKH2"
};
 let app= firebase.initializeApp(firebaseConfig);
  
export const fire = app;
