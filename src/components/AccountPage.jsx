import React from 'react';
import { FaCamera } from 'react-icons/fa';

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-10 px-4">
      <div className="h-screen w-full max-w-sm bg-white border border-gray-200 rounded-md shadow-sm">
        <div className="border-b px-6 py-3">
          <h2 className="text-md font-semibold text-gray-800">Account Settings</h2>
        </div>

        <div className="flex items-start gap-4 px-6 py-4 bg-gray-50">
          <div className="relative">
            <img
              className="w-[76px] h-[76px] rounded-full object-cover"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full text-xs">
              <FaCamera size={10} />
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-800">Marry Doe</h3>
            <p className="text-sm text-gray-500">Marry@gmail.com</p>
            
          </div>
          
        </div>
        <div className='bg-gray-50 border-b border-dotted'>
            <p className="p-4 text-xs text-gray-600 leading-tight">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>

        <div className="h-3/5 bg-gray-50 border-b border-dotted"></div>
      </div>
    </div>
  );
};

export default AccountPage;
