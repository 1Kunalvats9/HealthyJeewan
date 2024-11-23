import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface AdminLoginProps {
  onClose: () => void;
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'healthyjeewan@kaushik' && password === 'Shekhu@hjk') {
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sage-600 hover:text-sage-800"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-dancing font-bold text-sage-800 mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-sage-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-sage-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-500"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full btn-primary"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;