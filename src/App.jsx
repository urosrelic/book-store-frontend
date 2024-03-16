import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoutes } from './utils/PrivateRoutes';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider';
import { Books } from './pages/Books';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<PrivateRoutes />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/books' element={<Books />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
