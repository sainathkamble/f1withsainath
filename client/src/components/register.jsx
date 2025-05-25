import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';

export const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        avatar: null,
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('/api/v1/users/register', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            localStorage.setItem('userEmail', formData.email);
            navigate('/login');
        } catch (error) {
            setError(error.response.data.message || 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* F1 Logo and Title */}
                <div className="text-center">
                    <img 
                        src="/favicon.png" 
                        alt="F1 Logo" 
                        className="mx-auto h-16 w-auto mb-4"
                    />
                    <h2 className="text-4xl font-extrabold text-[#f5f5f5] tracking-tight">
                        Join the Race
                    </h2>
                    <p className="mt-2 text-sm text-[#666]">
                        Create your account to access exclusive F1 content
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-[#2a2a2a]">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-[#f5f5f5] mb-1">
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    name="fullName"
                                    onChange={handleChange}
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-[#3a3a3a] bg-[#2a2a2a] text-[#f5f5f5] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#b50000] focus:border-[#b50000] transition-colors duration-200"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f5] mb-1">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-[#3a3a3a] bg-[#2a2a2a] text-[#f5f5f5] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#b50000] focus:border-[#b50000] transition-colors duration-200"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-[#f5f5f5] mb-1">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-[#3a3a3a] bg-[#2a2a2a] text-[#f5f5f5] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#b50000] focus:border-[#b50000] transition-colors duration-200"
                                    placeholder="Choose a username"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-[#f5f5f5] mb-1">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-[#3a3a3a] bg-[#2a2a2a] text-[#f5f5f5] placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-[#b50000] focus:border-[#b50000] transition-colors duration-200"
                                    placeholder="Create a password"
                                />
                            </div>

                            <div>
                                <label htmlFor="avatar" className="block text-sm font-medium text-[#f5f5f5] mb-1">
                                    Profile Picture
                                </label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#3a3a3a] border-dashed rounded-lg hover:border-[#b50000] transition-colors duration-200">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-[#666]"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-[#666]">
                                            <label
                                                htmlFor="avatar"
                                                className="relative cursor-pointer rounded-md font-medium text-[#b50000] hover:text-[#8c0000] focus-within:outline-none"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="avatar"
                                                    name="avatar"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleFileChange}
                                                    required
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-[#666]">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[#b50000] hover:bg-[#8c0000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b50000] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                {isLoading ? (
                                    <LoadingSpinner />
                                ) : (
                                    <>
                                        Create Account
                                        <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                                            <svg
                                                className="h-5 w-5 text-[#f5f5f5] group-hover:text-white transition-colors duration-200"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="text-center">
                            <p className="text-sm text-[#666]">
                                Already have an account?{' '}
                                <a
                                    href="/login"
                                    className="font-medium text-[#b50000] hover:text-[#8c0000] transition-colors duration-200"
                                >
                                    Sign in
                                </a>
                            </p>
                        </div>
        </form>
                </div>
            </div>
        </div>
    );
}