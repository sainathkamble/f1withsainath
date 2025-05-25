import React, { useState, useEffect } from 'react';
import { Navbar } from "./navbar.jsx";
import { Footer } from "./footer.jsx";
import { LoadingSpinner } from './LoadingSpinner';

export const Stream = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the iframe
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <div className="h-[70vh] flex items-center justify-center p-4">
        <div className="h-[70vh] w-full max-w-[1600px] aspect-video relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#2a2a2a]">
              <LoadingSpinner />
            </div>
          )}
          <iframe
            src="https://embedrun.store/embed/8e1859af-389f-11f0-afb1-ecf4bbdafde4"
            title="Live Stream"
            className={`w-full h-[70vh] transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
