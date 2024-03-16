import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  // TODO add loading to handle async nature of cookie reading
  // TODO add error catching

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(token));
    }
  }, []);

  const handleLogin = (user) => {
    Cookies.set('auth_token', JSON.stringify(user), { expires: 30 }); // Cookie expires after 30 days
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    setCurrentUser(null);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
