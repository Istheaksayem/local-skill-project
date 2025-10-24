import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    console.log(loading,user);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

        const signIn =(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
        }

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading
    }
    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;