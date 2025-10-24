import React, { use } from 'react';
import { Link, NavLink } from 'react-router'
import logo from '../../assets/WhatsApp Image 2025-10-21 at 21.28.52_e3400c53.png'
import { AuthContext } from '../Provider/AuthProvider';
import userIcon from '../../assets/user.png'
import { toast, ToastContainer } from 'react-toastify';


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
    <div className='flex items-center justify-between px-6 py-3 bg-gray-100'>

      {/* Left side - Logo */}
      <div className="text-xl font-bold">
        <img className='w-15 rounded-2xl' src={logo} alt="" />
      </div>

      {/* Right side - Home & Profile */}
      <div>{user && user.email}</div>
      <div className="flex items-center gap-6">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/profile" >My Profile</NavLink>
        <div className='login-btn flex gap-5'>
          <img src={userIcon} alt="" />
          {user ? <button onClick={handleLogout} className="btn btn-neutral">Logout</button> : <Link to="/auth/login" className="btn btn-neutral">Login</Link>}


        </div>
      </div>
      {/* <ToastContainer position='top-center'></ToastContainer> */}
    </div>
  
  );
};

export default NavBar;