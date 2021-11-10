import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged,
} from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
 const [user, setUser] = useState({});
 const [isLoading, setIsLoading] = useState(true);
 const [authError, setAuthError] = useState("");

 //  REGISTER USER
 const registerUser = (email, password) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    // const user = userCredential.user;
    setAuthError(null);
    // ...
   })
   .catch((error) => {
    setAuthError(error.message);
   })
   .finally(() => setIsLoading(false));
 };

 // LOGIN USER
 const loginUser = (email, password) => {
  setIsLoading(true);
  signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in;
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
