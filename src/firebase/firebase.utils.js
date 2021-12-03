import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyAAQ4DlXMTaMwNh33RVkotpv7OcBSpsbhc',
  authDomain: 'crwn-db-ea1fc.firebaseapp.com',
  projectId: 'crwn-db-ea1fc',
  storageBucket: 'crwn-db-ea1fc.appspot.com',
  messagingSenderId: '734801023848',
  appId: '1:734801023848:web:c147a0074228c462617cdd',
  measurementId: 'G-6HB461BQZY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
