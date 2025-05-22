import React, { useEffect, useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function UserDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setDropdownOpen(false);
      alert('You have been logged out');
    } catch (error) {
      alert('Error signing out');
    }
  };

  return (
    <div className="relative">
      <button className="focus:outline-none" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <HiUserCircle className="w-6 h-6 text-white hover:text-yellow-300 cursor-pointer transition-colors" />
      </button>
      {dropdownOpen && (
        <div className="fixed top-16 right-6 w-48 rounded shadow-md py-4 bg-white z-[999] text-center">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:text-yellow-300 transition-colors"
            onClick={() => setDropdownOpen(false)}
          >
            Profile
          </Link>

          {!isAuthenticated ? (
            <Link
              to="/registration"
              onClick={() => setDropdownOpen(false)}
              className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="inline-block mt-2 px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-transform transform hover:scale-105"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default UserDropdown;
