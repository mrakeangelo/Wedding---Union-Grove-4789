import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLock, FiUser, FiEye, FiEyeOff } = FiIcons;

const AdminLogin = ({ setIsAdmin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo authentication - in production, use proper authentication
    if (credentials.email === 'admin@uniongrove.com' && credentials.password === 'admin123') {
      setIsAdmin(true);
      setError('');
    } else {
      setError('Invalid credentials. Try admin@uniongrove.com / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-warm-beige dark:bg-twilight-blue bg-linen-texture flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-cream/90 dark:bg-dusk-purple/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-md w-full paper-texture"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-soft-olive dark:bg-warm-amber rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiLock} className="text-cream dark:text-twilight-blue text-2xl" />
          </div>
          <h1 className="font-script text-3xl font-bold text-soft-olive dark:text-warm-amber mb-2">
            Admin Login
          </h1>
          <p className="text-soft-olive/70 dark:text-cream/70">
            Access the Union Grove admin panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-soft-olive dark:text-cream font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-3 top-3 text-soft-olive/50 dark:text-cream/50" />
              <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
                className="w-full pl-10 pr-4 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-soft-olive dark:text-cream font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <SafeIcon icon={FiLock} className="absolute left-3 top-3 text-soft-olive/50 dark:text-cream/50" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                className="w-full pl-10 pr-12 py-3 bg-linen dark:bg-dusk-purple border border-soft-olive/20 dark:border-warm-amber/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-olive dark:focus:ring-warm-amber text-soft-olive dark:text-cream"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-soft-olive/50 dark:text-cream/50 hover:text-soft-olive dark:hover:text-cream"
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} />
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-dusty-rose/20 dark:bg-sunset-orange/20 border border-dusty-rose/30 dark:border-sunset-orange/30 rounded-lg p-3 text-dusty-rose dark:text-sunset-orange text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-soft-olive dark:bg-warm-amber text-cream dark:text-twilight-blue py-3 rounded-lg font-medium text-lg hover:bg-golden-honey dark:hover:bg-sunset-orange transition-colors duration-200 shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-linen/50 dark:bg-dusk-purple/30 rounded-lg">
          <p className="text-soft-olive/70 dark:text-cream/70 text-sm mb-2">
            Demo Credentials:
          </p>
          <p className="text-soft-olive dark:text-cream text-sm">
            <strong>Email:</strong> admin@uniongrove.com<br />
            <strong>Password:</strong> admin123
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;