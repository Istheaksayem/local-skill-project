import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../component/Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { use } from 'react';


const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)

    const [error, setError] = useState('');

    const navigate =useNavigate()

    const handRegister = (e) => {

        e.preventDefault();
        //  console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password)



        if (!/[A-Z]/.test(password)) {
            return setError('Password must contain an uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            return setError('Password must contain a lowercase letter.');
        }
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long.');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {

                        setUser({...user,displayName: name, photoURL: photo})
                        navigate("/")
                    })
                    .catch((error) => {
                     console.log(error)
                     setUser(user)
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorCode, errorMessage)
            });



    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form onSubmit={handRegister} className="card-body">
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
                        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center font-semibold'>Already have an account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
            <ToastContainer position='top-center'></ToastContainer>
        </div>
    );
};

export default Register;