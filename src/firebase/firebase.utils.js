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

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (e) {
      console.log('error creating user', e.message);
    }
  }

  return userRef;
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
