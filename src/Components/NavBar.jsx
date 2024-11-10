import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = ({ onSearch }) => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch function passed from the parent component
  };

  return (
    <header className="w-full bg-gray-800 shadow-md">
      {/* Navbar Container */}
      <nav className="container mx-auto flex items-center justify-between p-4 space-x-4">
        
        {/* App Name */}
        <h2 className="text-2xl font-bold text-blue-600">Notes</h2>
        
        
        {/* User Info and Logout Button */}
        {isAuthenticated && (
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Welcome Message */}
            <div className="hidden sm:block text-gray-200 font-medium">
              <span>Welcome,</span>
              <span className="ml-1 font-semibold text-blue-500">{user.name}</span>
            </div>
            
            {/* Logout Button */}
            <button 
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
