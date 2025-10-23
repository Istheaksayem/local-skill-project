import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SkillsDetailsCard = ({ skillDetails }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Just show success toast
        toast.success('Session booked successfully!');
        // Clear the form
        setFormData({ name: '', email: '' });
    };
   
    return (

        <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
            
               {/* Skill Image */}
      <img
        src={skillDetails.image}
        alt={skillDetails.skillName}
        className="w-full h-48 object-cover"
      />

      {/* Skill Info */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{skillDetails.skillName}</h2>
        <p className="text-gray-600 mb-3">{skillDetails.description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
          <span>Provider: {skillDetails.providerName}</span>
          <span>Price: ${skillDetails.price}</span>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>Rating: {skillDetails.rating}</span>
          <span>Slots: {skillDetails.slotsAvailable}</span>
        </div>
          </div>
            {/* Book Session */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                <label className='label'>Your Name </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded"
                    required
                />
                <label className='label'>Your Email </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-orange-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>

            {/* Toast container */}
            <ToastContainer position="top-center" />
        </div>
    );
};

export default SkillsDetailsCard;
