import React, { useEffect, useState } from 'react';

const TopRatedProviders = () => {
     const [providerSkill ,setProviderSkill]=useState([])
    useEffect(()=>{
        fetch("/skillData.json")
        .then(res =>res.json())
        .then(data =>{
            setProviderSkill(data)
        })
        .catch((error) => console.error("Error loading skills:", error));
    },[])
    const topProviders =providerSkill
   .sort((a, b) =>b.rating-a.rating)
   .slice(0,3)
    return (
        <div>
           <h2 className='text-3xl font-bold text-center mb-6 text-indigo-600' > Top rated providers</h2>
           {providerSkill.length === 0 ?
           (<p className='text-center text-gray-500'>loading....</p>):
           (<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
            {topProviders.map((provider)=>(<div 
            key={provider.skillId}
            className=' rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden'
            >
                <img 
                className='h-48 w-full object-cover'
                src={provider.image} 
                alt={provider.skillName}
                 />
                 <div className='p-4'>
                    <h3 className='text-xl font-semibold mb-1'>{provider.skillName}</h3>
                    <p className='text-gray-500 text-sm mb-2'>{provider.providerName}</p>
                    <p className='text-yellow-500 font-semibold mb-2'>{provider.rating}</p>
                 </div>

            </div>
        
        ))}
           </div>)}
        </div>
    );
};

export default TopRatedProviders;