import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in by verifying the access token
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('/api/v1/users/current-user', {
          withCredentials: true
        });
        if (response.data.data) {
          setIsLoggedIn(true);
          setIsRegistered(true);
          setUserAvatar(response.data.data.avatar);
        }
      } catch (error) {
        // Handle 401 and other errors
        setIsLoggedIn(false);
        setUserAvatar('');
        
        // Check if user is registered by checking localStorage
        const userEmail = localStorage.getItem('userEmail');
        setIsRegistered(!!userEmail);

        // If it's a 401 error, clear any invalid tokens
        if (error.response?.status === 401) {
          // Clear any stored tokens or auth data
          localStorage.removeItem('userEmail');
          // You might want to clear other auth-related data here
        }
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/api/v1/users/logout', {}, {
        withCredentials: true
      });
      setIsLoggedIn(false);
      setUserAvatar('');
      localStorage.removeItem('userEmail');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
          ['Home', 1, "/"], 
          ['Stream', 2, "/stream"], 
          ['Calendar', 3, "/calendar"], 
    ['Schedule', 4, "/schedule"]
  ];

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <div className="relative group">
          <img 
            src={userAvatar} 
            alt="User Avatar" 
            className="h-10 w-10 rounded-full cursor-pointer hover:ring-2 hover:ring-[#b50000] transition-all duration-300"
            onClick={() => navigate('/profile')}
          />
          <div className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] rounded-lg shadow-lg py-2 hidden group-hover:block z-10">
            <a 
              href="/profile" 
              className="block px-4 py-2 text-sm text-[#f5f5f5] hover:bg-[#b50000] transition-colors duration-200"
            >
              Profile
            </a>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-[#f5f5f5] hover:bg-[#b50000] transition-colors duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <a 
          href={isRegistered ? "/login" : "/register"} 
          className="h-auto w-full text-center"
        >
          {isRegistered ? "Login" : "Login/Register"}
        </a>
      );
    }
  };

  const NavItem = ({ item, index, route }) => (
    <li
      className="text-[#f5f5f5] font-semibold text-2xl flex flex-col items-center justify-center relative group px-4"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
      <a href={route} className="h-auto w-full text-center relative z-10 group-hover:text-[#b50000] transition-colors duration-300">
        {item}
      </a>
            <div
        className={`h-1 w-0 group-hover:w-full bg-[#b50000] transition-all duration-300 ease-in-out absolute bottom-0 rounded-full`}
            ></div>
          </li>
  );

  return (
    <nav className="h-[10vh] w-full bg-[#121212]">
      <div className="h-[10vh] w-full flex items-center">
        {isLoggedIn ? (
          // When user is logged in - Nav items + Avatar
          <>
            <ul className="flex-1 flex justify-evenly items-center">
              {navItems.map(([item, index, route]) => (
                <NavItem key={index} item={item} index={index} route={route} />
        ))}
      </ul>
            <div className="px-6">
              {renderAuthButton()}
            </div>
          </>
        ) : (
          // When user is not logged in - All items including login/register
          <ul className="w-full flex justify-evenly items-center">
            {navItems.map(([item, index, route]) => (
              <NavItem key={index} item={item} index={index} route={route} />
            ))}
            <li
              className="text-[#f5f5f5] font-semibold text-2xl flex flex-col items-center justify-center relative group px-4"
              onMouseEnter={() => setHoveredItem(5)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="h-auto w-full text-center relative z-10 group-hover:text-[#b50000] transition-colors duration-300">
                {renderAuthButton()}
              </div>
              <div
                className={`h-1 w-0 group-hover:w-full bg-[#b50000] transition-all duration-300 ease-in-out absolute bottom-0 rounded-full`}
              ></div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}