import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Wallet, Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.name);
    }
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-primary-600 text-white shadow-lg border-b border-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Wallet className="h-8 w-8 text-white" />
            </div>
            <span className="text-accent-500 text-2xl font-bold ml-2">Ledgerly</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-accent-500 transition">Home</Link>

            {isAuthenticated && (
              <>
                <Link to="/dashboard" className="hover:text-accent-500 transition">Dashboard</Link>
                <Link to="/spending" className="hover:text-accent-500 transition">Spending</Link>
                <Link to="/planner" className="hover:text-accent-500 transition">Planner</Link>
                <div className="border border-white px-2 py-1">
                  <button onClick={handleLogout} className="hover:text-accent-500 transition text-white">
                    Logout
                  </button>
                </div>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Link to="/login" className="hover:text-accent-500 transition">Login</Link>
                <Link to="/register" className="hover:text-accent-500 transition">Register</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-600 px-4 pb-4 space-y-2">
          <Link to="/" className="hover:text-accent-500 transition">Home</Link>

          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="hover:text-accent-500 transition">Dashboard</Link>
              <Link to="/spending" className="hover:text-accent-500 transition">Spending</Link>
              <Link to="/planner" className="hover:text-accent-500 transition">Planner</Link>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to="/login" className="hover:text-accent-500 transition">Login</Link>
              <Link to="/register" className="hover:text-accent-500 transition">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
