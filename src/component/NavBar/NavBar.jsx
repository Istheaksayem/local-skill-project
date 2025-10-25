import React, { use } from 'react';
import { Link, NavLink } from 'react-router'
import logo from '../../assets/WhatsApp Image 2025-10-21 at 21.28.52_e3400c53.png'
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from '../../assets/user.png'
import toast, { Toaster } from 'react-hot-toast';



const NavBar = () => {

  const { user, logout } = use(AuthContext)
  
  const handleLogout = () => {
    // console.log("user trying to Logout")
    logout()
      .then(() => {
        toast("you Logout Successfully")
      }).catch((error) => {
        console.log(error)
      });
  }


  return (
    <div className='flex items-center justify-between px-6 py-3 bg-gray-100 mt-1'>

      {/* Left side - Logo */}
      <div className="text-xl font-bold">
        <img className='w-15 rounded-2xl' src={logo} alt="" />
      </div>

      {/* Right side - Home & Profile */}
      <div className='hidden md:block'>{user && user.email}</div>
      <div className="flex items-center gap-6">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/profile" >My Profile</NavLink>
        <div className='login-btn flex gap-5'>

          <div className="relative group">
            <img
              className='w-12 h-12 rounded-full cursor-pointer border-2 border-gray-400'
              src={user && user.photoURL ? user.photoURL : userIcon}
              alt="User Avatar"
            />

            {/* hover display name  */}
            {user && user.displayName && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 bg-gray-800 text-white text-sm px-2 py-1 rounded-md hidden group-hover:block whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100">
                {user.displayName}
              </span>
            )}
          </div>

          {user ? <button onClick={handleLogout} className="btn btn-neutral">Logout</button> : <Link to="/auth/login" className="btn btn-neutral">Login</Link>}


        </div>
          {/* <ToastContainer position='top-center'></ToastContainer> */}
          {/* <Toaster position='top-center'></Toaster> */}
      </div>
    
    </div>

  );
};

export default NavBar;