import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: 'Marry Doe',
        phoneNumber: 'Marry Doe',
        email: 'Marry Doe',
        password: 'Marry Doe',
        companyName: 'Marry Doe',
        isAgency: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="h-screen max-w-md w-full bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Create your</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">PopX account</h2>


                    <div className="relative mb-6">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-[#6C25FF]">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="relative mb-6">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-[#6C25FF]">
                            Phone number<span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="relative mb-6">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-[#6C25FF]">
                            Email address<span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="relative mb-6">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-[#6C25FF]">
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="relative mb-6">
                        <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-[#6C25FF]">
                            Company name
                        </label>
                        <input
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>


                    <div className="mb-8 ml-1">
                        <label className="block text-sm text-gray-600 mb-2">
                            Are you an Agency?<span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    checked={formData.isAgency === true}
                                    onChange={() => setFormData({ ...formData, isAgency: true })}
                                    className="h-4 w-4 text-purple-600 focus:ring-[#6C25FF]"
                                />
                                <span className="ml-2 text-gray-700">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="isAgency"
                                    checked={formData.isAgency === false}
                                    onChange={() => setFormData({ ...formData, isAgency: false })}
                                    className="h-4 w-4 text-purple-600 focus:ring-[#6C25FF]"
                                />
                                <span className="ml-2 text-gray-700">No</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition duration-200">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;