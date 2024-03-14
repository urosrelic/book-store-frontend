import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { PrivateRoutes } from './components/utils/PrivateRoutes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   console.log('User authenticated: ', isAuthenticated);
  //   console.log(currentUser);
  // }, [isAuthenticated, currentUser]);

  // Check if the user is authenticated on component mount
  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get('auth_token');
      if (token) {
        setIsAuthenticated(true);

        const user = JSON.parse(token); // Assuming user data is stored as JSON in the cookie
        setCurrentUser(user);
      }
    };
    checkAuthentication();
  }, []);

  const handleLogin = (user) => {
    // Set the cookie with the authentication token
    // For simplicity storing just the user as a string instead of a real token
    Cookies.set('auth_token', JSON.stringify(user), { expires: 30 }); // Cookie expires after 30 days
    setIsAuthenticated(true);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    // Remove the authentication token cookie
    Cookies.remove('auth_token');
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <div className='App'>
      <Router>
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          handleLogout={handleLogout}
          currentUser={currentUser}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
            {/* // TODO ADD PRIVATE ROUTES */}
            {/* example: Dashboard component */}
          </Route>
          <Route path='/books' element={<BookList />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/login'
            element={
              <Login
                handleLogin={handleLogin}
                isAuthenticated={isAuthenticated}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
