import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged,
 updateProfile,
} from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [authError, setAuthError] = useState("");

 //  REGISTER USER
 const registerUser = (email, password, name) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    const newUser = { email, displayName: name };
    setUser(newUser);
    // send name to firebase
    updateProfile(auth.currentUser, {
     displayName: name,
    })
     .then(() => {})
     .catch((error) => {});
    setAuthError(null);
    // ...
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));
 };

 // LOGIN USER
 const loginUser = (email, password, location, history) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in;
    const destination = location?.state?.from || "/";
    history.push(destination);
    setAuthError(null);
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));
 };

 // OBSERVER
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
   if (user) {
    setUser(user);
   } else {
    setUser({});
   }
   setIsLoading(false);
  });
  return () => unsubscribe;
 }, []);

 // LOGOUT
 const logOut = () => {
  setIsLoading(true);
  signOut(auth)
   .then(() => {
    // Sign-out successful.
   })
   .catch((error) => {
    // An error happened.
   })
   .finally(() => setIsLoading(false));
 };

 return {
  user,
  isLoading,
  authError,
  registerUser,
  loginUser,
  logOut,
 };
};

export default useFirebase;
