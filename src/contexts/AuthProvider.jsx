import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const token = Cookies.get('auth_token');
        if (token) {
          const parsedUser = JSON.parse(token);
          setIsAuthenticated(true);
          setCurrentUser(parsedUser);
        }
      } catch (error) {
        console.error('Error fetching authentication data:', error);
        setError('An error occurred while retrieving authentication data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAuthData();
  }, []);

  const handleLogin = (user) => {
    try {
      Cookies.set('auth_token', JSON.stringify(user), { expires: 30 });
      setIsAuthenticated(true);
      setCurrentUser(user);
      setError(''); // Clear any previous errors on successful login
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again.');
    }
  };

  const handleLogout = () => {
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    setCurrentUser(null);
    setError(''); // Clear any previous errors on logout
    toast.success('User logged out');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
        handleLogin,
        handleLogout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
