import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <p>Email: support@legalsolutions.com</p>
          <p>Phone: +880 1700-000000</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Legal</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-8 pt-4 text-sm">
        © {new Date().getFullYear()} Legal Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
