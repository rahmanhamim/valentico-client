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
 const [admin, setAdmin] = useState(false);

 //  REGISTER USER
 const registerUser = (email, password, name) => {
  setIsLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    const newUser = { email, displayName: name };
    setUser(newUser);
    // save user to database
    saveUser(email, name, "POST");
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

 //  USEEFFECT FOT CHECK ADMIN OR NOT
 useEffect(() => {
  fetch(`https://radiant-plains-03771.herokuapp.com/users/${user.email}`)
   .then((res) => res.json())
   .then((data) => setAdmin(data.admin));
 }, [user?.email]);

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

 // Save user to database
 const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch("https://radiant-plains-03771.herokuapp.com/users", {
   method: method,
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify(user),
  }).then();
 };

 return {
  user,
  admin,
  isLoading,
  authError,
  registerUser,
  loginUser,
  logOut,
 };
};

export default useFirebase;
