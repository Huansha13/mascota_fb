
import firebase from 'firebase/app';
import database from 'firebase/database';
import auth from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAG3hHNe_Rv1h35BlKVeXnbf7fwsw7XBg0",
  authDomain: "mascota-vue.firebaseapp.com",
  projectId: "mascota-vue",
  storageBucket: "mascota-vue.appspot.com",
  messagingSenderId: "128716510210",
  appId: "1:128716510210:web:9682afbde8aebd4528c31b"
};

export default firebase.initializeApp(firebaseConfig);
