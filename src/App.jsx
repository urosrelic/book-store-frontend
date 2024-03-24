import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { PrivateRoutes } from './utils/PrivateRoutes';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Button } from '@mui/material';
import { ToastBar, Toaster, toast } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthProvider';
import { CartProvider } from './contexts/CartProvider';
import { Book } from './pages/Book/Book';
import { Books } from './pages/Books/Books';
import { Cart } from './pages/Cart/Cart';
import { Dashboard } from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
          duration: 1000,

          // Default options for specific types
          error: {
            duration: 2000,
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                <Button
                  onClick={() => toast.dismiss(t.id)}
                  sx={{ backgroundColor: 'transparent' }}
                >
                  X
                </Button>
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      ;
      <AuthProvider>
        <CartProvider>
          <div className='App'>
            <Router>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<PrivateRoutes />}>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/cart' element={<Cart />} />
                </Route>
                <Route path='/books' element={<Books />} />
                <Route path='/books/book/:bookId' element={<Book />} />{' '}
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
