import React from 'react';
import { FaHandshake, FaSearch, FaUserPlus } from 'react-icons/fa';

const HowItWorks = () => {
    const steps =[
        {
            id: 1,
            icon:<FaUserPlus className='text-indigo-600 text-4xl mb-3'/>,
            title:"Sign Up",
            desc:"Create your free account and join our learning community."
        },
        {
            id: 2,
            icon:<FaSearch className='text-indigo-600 text-4xl mb-3'/>,
            title:"Find Skill",
            desc:"Browse and choose from various skill categories that interest you."
        },
        {
            id: 3,
            icon:<FaHandshake className='text-indigo-600 text-4xl mb-3'/>,
            title:"Start Learning",
            desc:"Connect with providers and begin your skill learning journey."
        }
    ]
    return (
        <div className='my-16 text-center'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-8'>How It Works</h2>
            <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-5xl mx-auto'>
                {steps.map((step) =>(
                    <div 
                    className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition'
                    key={step.id}>
                        {step.icon}
                        <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
                        <p className='text-gray-600'>{step.desc}</p>

                    </div>
                ))}
            </div>
        
        </div>
    );
};

export default HowItWorks;