import React, { use } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user,loading}=use(AuthContext)
    // console.log(user)

    const location =useLocation()
    console.log(location)

    if(loading){
       return <span className="loading loading-spinner text-primary"></span>
    }

    if(user && user?.email){

        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRouter;