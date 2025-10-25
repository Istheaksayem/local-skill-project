import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';


import { useLocation, useNavigate } from 'react-router';

const ForgetPassword = () => {
    const auth = getAuth();
    const Location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();

    useEffect(() => {
        if (location.state?.email) {
            emailRef.current.value = location.state.email;
        }
    },[])
    const handleResetPassword = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        if(!email){
            alert("please enter your email");
            return
        }

        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert("Please reset email sent,please check your gmail")
            window.open("https://mail.google.com")
            navigate("/auth/login")
        })
        .catch((error)=>{
            alert("Error :" + error.message)
        })

    }
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
                <form onSubmit={handleResetPassword} className="card-body">
                    <h2 className="text-2xl font-semibold text-center text-black">
                        Reset Your Password
                    </h2>

                    <fieldset className="fieldset">
                        <label className="label">Your Email</label>
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            className="input"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" className="btn bg-blue-600 mt-4">
                            Reset Password
                        </button>
                    </fieldset>
                </form>
              
            </div>
          
        </div>
    );
};

export default ForgetPassword;