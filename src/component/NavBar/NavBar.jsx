import React from 'react';
import {  Link, NavLink } from 'react-router'
import logo from '../../assets/WhatsApp Image 2025-10-21 at 21.28.52_e3400c53.png'


const NavBar = () => {
    return (
           <div className='flex items-center justify-between px-6 py-3 bg-gray-100'>
      
      {/* Left side - Logo */}
      <div className="text-xl font-bold">
      <img className='w-15 rounded-2xl' src={logo} alt="" />
      </div>

      {/* Right side - Home & Profile */}
      <div className="flex items-center gap-6">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/profile" >My Profile</NavLink>
        <Link to="/auth/login" className="btn btn-neutral">Login</Link>
      </div>
    </div>
    
    );
};

export default NavBar;