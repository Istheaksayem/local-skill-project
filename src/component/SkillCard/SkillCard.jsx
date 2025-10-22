import React from 'react';

const SkillCard = ({skill}) => {
    const {image,skillName,rating,price}=skill;
    return (
        <div className="rounded-2xl shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={skillName}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="text-lg font-semibold mt-3">{skillName}</h3>
      <p className="text-yellow-500 font-medium">⭐ {rating}</p>
      <p className="text-gray-700">Price: ${price}</p>
      <button className="btn btn-sm bg-blue-500 text-white mt-3 hover:bg-blue-600">
        View Details
      </button>
    </div>
    );
};

export default SkillCard;