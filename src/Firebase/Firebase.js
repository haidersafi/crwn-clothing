import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const  firebaseConfig = {
  apiKey: "AIzaSyD0W1pKlu8t0CZexqXRGAOVv49w7AX7wgI",
  authDomain: "crwnndb.firebaseapp.com",
  databaseURL: "https://crwnndb.firebaseio.com",
  projectId: "crwnndb",
  storageBucket: "crwnndb.appspot.com",
  messagingSenderId: "355269447244",
  appId: "1:355269447244:web:f14e6476940c55986ceee9",
  measurementId: "G-LYD2KHS53E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const createUserProfileDocument= async (userAuth,additionalData)=>{
  if(!userAuth)return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        await userRef.set({displayName,email,createdAt,...additionalData})
      }
      catch(err){console.log('error creating user',err.message)}
    }
    else{console.log('snapshot already exists')}
  return userRef;
  }
  
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;