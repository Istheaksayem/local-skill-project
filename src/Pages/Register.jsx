import React from 'react';
import { Link } from 'react-router';


const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form className="card-body">
                    <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
                    <fieldset className="fieldset">
                        {/* User name  */}
                        <label className="label">User Name</label>
                        <input
                            type="text"
                            name='name'
                            className="input"
                            placeholder="Your name"
                            required
                        />
                        {/* Photo url  */}
                        <label className="label">Photo Url</label>
                        <input
                            type="text"
                            name='photo'
                            className="input"
                            placeholder="Photo url"
                            required
                        />
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

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center font-semibold'>Don’t Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;