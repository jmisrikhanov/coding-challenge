import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC680Xe4nl6I1oqfD434h7cXcVUmrLdwUM",
  authDomain: "video-app-task.firebaseapp.com",
  projectId: "video-app-task",
  storageBucket: "video-app-task.appspot.com",
  messagingSenderId: "696685161307",
  appId: "1:696685161307:web:6fc656583724287d81887e",
});

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({
      displayName: displayName,
    });
  } catch (error) {}
};

export const SignIn = async (email, password) => {
  let errorMessage = "";
  let errorCode = "";
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
    });

  return { errorCode, errorMessage };
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      // ...
      setCurrentUser(null);
    }
  });
};

export const LogOut = async () => {
  await firebase.auth().signOut();
};

export default firebaseApp;
