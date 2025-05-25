import React from 'react';
import { useDriversList } from '../data/driversList.jsx';
import { LoadingSpinner } from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';

const DriversContent = () => {
  const { driversList, isLoading, error } = useDriversList();

  // Function to get country code for flag API
  const getCountryCode = (code) => {
    // Convert the country code to lowercase for the flag API
    return code;
  };

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col bg-[#0a0a0a]">
        <div className="h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-4 text-[#f5f5f5]">Loading drivers data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    throw new Error(error); // This will be caught by the ErrorBoundary
  }

  if (!driversList || driversList.length === 0) {
    return (
      <div className="h-screen flex flex-col bg-[#0a0a0a]">
        <div className="h-[70vh] flex items-center justify-center">
          <div className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
            <p className="text-[#f5f5f5]">No drivers data available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a]">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#f5f5f5] mb-8 text-center hover:text-[#b50000] hover:scale-105 transition-all duration-300 cursor-default">
          F1 Drivers 2025
        </h1>
        <div className="h-[calc(100vh-12rem)] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {driversList.map((driver) => (
              <div key={driver.driver_number} className="bg-[#1a1a1a] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] overflow-hidden border border-[#2a2a2a] hover:border-[#b50000] hover:shadow-[0_8px_30px_rgba(181,0,0,0.2)] transition-all duration-300">
                {/* Top Section */}
                <div className="p-4 flex items-start space-x-4">
                  {/* Driver Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={driver.headshot_url}
                      alt={driver.full_name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/default-driver.png';
                      }}
                    />
                  </div>
                  {/* Driver Info */}
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#f5f5f5]">{driver.full_name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-[#b50000] font-semibold">#{driver.driver_number}</span>
                      <span className="text-[#f5f5f5]">•</span>
                      <span className="text-[#f5f5f5]">{driver.country_code}</span>
                      <img
                        src={`https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/${getCountryCode(driver.country_code)}.svg`}
                        alt={`${driver.country_code} flag`}
                        className="w-5 h-3 object-cover rounded-sm"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-[#666] mt-2">{driver.team_name}</p>
                  </div>
                </div>
                {/* Bottom Section */}
                <div className="bg-[#2a2a2a] p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-[#666]">Team</p>
                      <p className="text-[#f5f5f5] font-medium">{driver.team_name}</p>
                    </div>
                    <div>
                      <p className="text-[#666]">Country</p>
                      <p className="text-[#f5f5f5] font-medium">{driver.country_code}</p>
                    </div>
                    <div>
                      <p className="text-[#666]">Driver Number</p>
                      <p className="text-[#f5f5f5] font-medium">#{driver.driver_number}</p>
                    </div>
                    <div>
                      <p className="text-[#666]">Status</p>
                      <p className="text-[#f5f5f5] font-medium">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Drivers = () => {
  return (
    <ErrorBoundary>
      <DriversContent />
    </ErrorBoundary>
  );
};
