import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const MyContext = createContext(null);
const auth = getAuth(app);
const googleProvidor = new GoogleAuthProvider();
const githubProvidor = new GithubAuthProvider();

const AuthProvidor = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvidor);
  };

  const githubSingIn = () => {
    return signInWithPopup(auth, githubProvidor);
  };

  const customregister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const customSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const Logout = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    googleSignIn,
    Logout,
    githubSingIn,
    customregister,
    customSignIn,
  };
  return <MyContext.Provider value={userInfo}>{children}</MyContext.Provider>;
};

export default AuthProvidor;
