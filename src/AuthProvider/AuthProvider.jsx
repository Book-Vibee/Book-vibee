import { createContext, useEffect, useState } from "react"
import { app } from './../Firebase_Config/firebaseConfig';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged
} from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

   const [user,setUser]=useState(null);
   const [loading,setLoading]=useState(true);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}
