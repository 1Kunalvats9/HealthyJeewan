import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import AdminLogin from './AdminLogin';

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-dancing font-bold text-sage-800">
              Healthy Jeewan
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sage-600 hover:text-sage-800 transition-colors">Home</a>
            <a href="#" className="text-sage-600 hover:text-sage-800 transition-colors">Recipes</a>
            <a href="#" className="text-sage-600 hover:text-sage-800 transition-colors">Categories</a>
            <a href="#" className="text-sage-600 hover:text-sage-800 transition-colors">About</a>
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="btn-primary"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center space-x-2 text-sage-600 hover:text-sage-800 transition-colors"
              >
                <User size={20} />
                <span>Admin</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sage-600 hover:text-sage-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-sage-600 hover:text-sage-800">Home</a>
            <a href="#" className="block px-3 py-2 text-sage-600 hover:text-sage-800">Recipes</a>
            <a href="#" className="block px-3 py-2 text-sage-600 hover:text-sage-800">Categories</a>
            <a href="#" className="block px-3 py-2 text-sage-600 hover:text-sage-800">About</a>
            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="block w-full text-left px-3 py-2 text-sage-600 hover:text-sage-800"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="block w-full text-left px-3 py-2 text-sage-600 hover:text-sage-800"
              >
                Admin Login
              </button>
            )}
          </div>
        </motion.div>
      )}

      {/* Admin Login Modal */}
      {showLoginModal && (
        <AdminLogin
          onClose={() => setShowLoginModal(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setShowLoginModal(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;