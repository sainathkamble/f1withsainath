import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from './LoadingSpinner';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await axios.post('/api/v1/users/login', formData, {
                withCredentials: true
            });
            console.log(response.data);
            localStorage.setItem('userEmail', formData.email);
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed');
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
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-[#666]">
                        Sign in to your F1 account
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
                                    placeholder="Enter your password"
                                />
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
                                        Sign In
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
                                Don't have an account?{' '}
                                <a
                                    href="/register"
                                    className="font-medium text-[#b50000] hover:text-[#8c0000] transition-colors duration-200"
                                >
                                    Sign up
                                </a>
                            </p>
                        </div>
        </form>
                </div>
            </div>
        </div>
    );
}