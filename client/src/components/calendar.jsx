import React from 'react'
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";

export const Calendar = () => {
  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <div className="h-[70vh] flex items-center justify-center p-4">
        <img 
          className="h-full w-auto mx-auto object-contain" 
          src="/calendar.webp" 
          alt="F1 Calendar"
        />
      </div>
      <Footer />
    </div>
  );
}
