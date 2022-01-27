// import firebase from 'firebase/app  '
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import firebase from "firebase/compat/app"
// import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';


const config = {
    apiKey: "AIzaSyD_Ngtj1KoKiXvI_auUgr6HRZHlM12N8nE",
    authDomain: "crown-db-b3d71.firebaseapp.com",
    projectId: "crown-db-b3d71",
    storageBucket: "crown-db-b3d71.appspot.com",
    messagingSenderId: "530644509255",
    appId: "1:530644509255:web:7cad348d2b5187eb34c762",
    measurementId: "G-468HLFDX2J"
};

firebase.initializeApp(config);
// const app = initalizeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// set up google firebase authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// creating user profile document in database
export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth)return "not signed in";

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

     if(!snapShot.exists) {
        //  if snapshot does not exist create it
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("something went wrong",error.message)
        }
     }

    //  console.log(snapShot)
     return userRef;
}
export default firebase;