import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        const token = sessionStorage.getItem('auth_token');
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
      sessionStorage.setItem('auth_token', JSON.stringify(user));
      setIsAuthenticated(true);
      setCurrentUser(user);
      setError(''); // Clear any previous errors on successful login
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login.');
    }
  };
  const handleLogout = () => {
    try {
      sessionStorage.removeItem('auth_token');
      setIsAuthenticated(false);
      setCurrentUser(null);
      setError(''); // Clear any previous errors on successful logout
    } catch (error) {
      console.error('Error during logout:', error);
      setError('An error occurred during logout.');
    }
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
