import React from 'react';
import { FaGlobe, FaCopyright } from 'react-icons/fa'; 

export const Footer = () => {
    return (
        <footer className="h-[20vh] bg-[#121212] grid grid-cols-1 grid-rows-2">
            <p className="h-auto w-full text-[#f5f5f5] font-2xl flex justify-center items-center">
                Created and maintained by Sainath Kamble 
                <a href="https://sainathkamble.vercel.app/" className="flex items-center text-blue-500 hover:text-blue-700 ml-1">
                    <FaGlobe className="ml-1" /> 
                </a>
            </p>
            <p className="h-auto w-full opacity-70 text-[#f5f5f5] flex justify-center items-center">
                All rights reserved <FaCopyright className="inline mx-1" /> 2025 
            </p>
        </footer>
    );
}