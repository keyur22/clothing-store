import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWpFdVidla35l79XuMLBjpZGdEiX8tO0E",
  authDomain: "clothing-store-8d985.firebaseapp.com",
  databaseURL: "https://clothing-store-8d985.firebaseio.com",
  projectId: "clothing-store-8d985",
  storageBucket: "clothing-store-8d985.appspot.com",
  messagingSenderId: "370188858920",
  appId: "1:370188858920:web:987ec2a2504109d2ada71d",
  measurementId: "G-VS66YNM21E",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (err) {
      console.log("Error Creating User", err.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
