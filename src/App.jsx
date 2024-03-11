import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log('User authenticated: ', isAuthenticated);
    console.log(currentUser);
  }, [isAuthenticated, currentUser]);

  return (
    <div className='App'>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} currentUser={currentUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<BookList />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/login'
            element={
              <Login
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                setCurrentUser={setCurrentUser}
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
