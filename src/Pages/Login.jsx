import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form className="card-body">
                    <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        name='email' 
                        className="input" 
                        placeholder="Email" 
                        required
                        />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input 
                        type="password" 
                        name='password' 
                        className="input" 
                        placeholder="Password" 
                        required
                        />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='text-center font-semibold'>Don’t Have An Account ? <Link className='text-secondary' to="/auth/register">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;