import React, { useContext, useState } from 'react';
import { AuthContext } from '../component/Provider/AuthProvider';
import toast from 'react-hot-toast';


const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

  const handleUpdate = () => {
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success('Profile updated successfully!');
      })
      .catch((error) => {
        toast.error('Update failed!');
        console.error(error);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10 text-center">
      <img
        src={user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}
        alt="User"
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-400"
      />

      <h2 className="text-2xl font-semibold mt-4">
        {user?.displayName || 'No Name'}
      </h2>
      <p className="text-gray-600 mb-4">{user?.email}</p>

      <div className="space-y-3 text-left">
        <input
          type="text"
          className="border w-full px-3 py-2 rounded-md"
          placeholder="Update Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="border w-full px-3 py-2 rounded-md"
          placeholder="Update Photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
      </div>

      <button
        onClick={handleUpdate}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
