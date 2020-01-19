import * as firebase from 'firebase';

const firebaseConfig = {

};
 let app= firebase.initializeApp(firebaseConfig);
  
export const fire = app;
