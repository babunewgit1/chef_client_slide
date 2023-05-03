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
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvidor);
  };

  const githubSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvidor);
  };

  const customregister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const customSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
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
    loading,
  };
  return <MyContext.Provider value={userInfo}>{children}</MyContext.Provider>;
};

export default AuthProvidor;
