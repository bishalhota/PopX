import React from 'react';
import { useNavigate } from 'react-router-dom';



const Welcome = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Login");
    }

    return (
        <div className=" bg-gray-50 flex justify-center px-4 ">
            <div className="h-screen max-w-md w-full bg-white rounded-lg shadow-md  flex justify-center items-end mt-2 ">
                <div className='w-full px-8 mb-2'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to PopX</h1>

                    <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet,</p>
                    <p className="text-gray-600 mb-8">consectetur adipiscing elit.</p>

                    <button className="w-full bg-[#6C25FF] hover:bg-[#6C25FF] text-white font-medium py-2 px-4 rounded-md mb-4 transition duration-200 cursor-pointer">
                        Create Account
                    </button>

                    <button onClick={handleLogin} className="w-full bg-[#6C25FF4B] hover:bg-[#6C25FF4B] text-black font-medium py-2 px-4 rounded-md mb-4 transition duration-200 cursor-pointer">
                        Already Registered? <span onClick={handleLogin} className="text-purple-600 font-medium cursor-pointer">Login</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;