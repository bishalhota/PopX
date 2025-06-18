import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="h-screen max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Signin to your</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">PopX account</h2>

        <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet,</p>
        <p className="text-gray-600 mb-8">consectetur adipiscing elit.</p>

        <div className="relative mb-6">

          <span className='absolute text-[#6C25FF] bg-white -top-0.5 left-2 px-1 w-1/3'>Email Address</span>

          <input
            className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="email"
            type="email"
            placeholder="Enter email address"
          />
        </div>

        <div className="relative mb-6">
          <span className='absolute text-[#6C25FF] bg-white -top-3.5 left-2 px-1 w-1/3'>Password</span>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            id="password"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <button className="w-full bg-[#CBCBCB] hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage