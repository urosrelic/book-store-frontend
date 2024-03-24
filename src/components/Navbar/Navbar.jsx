import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import { Sidebar } from '../Sidebar/Sidebar';

import { useMediaQuery } from '@uidotdev/usehooks';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const navigate = useNavigate();

  const { isAuthenticated, handleLogout } = useAuth();
  const { cartCount, removeCartCookie } = useCart();
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isWideScreen = useMediaQuery('only screen and (min-width: 1024px)');

  useEffect(() => {
    console.log(cartCount);
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogoutClick = () => {
    handleLogout();
    removeCartCookie();
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const iconStyles = {
    fontSize: '2rem',
    color: '#17242a',
    cursor: 'pointer',
  };

  return (
    <div className={sticky ? 'navbar sticky' : 'navbar'}>
      <h1 className='navbar-title' onClick={() => navigate('/')}>
        book<span>store</span>
      </h1>

      <div className='navbar-links'>
        <div className={sticky ? 'navbar-link sticky' : 'navbar-link'}>
          <Link to='/'>
            <HomeIcon sx={{ ...iconStyles }} />
          </Link>
        </div>
        <div className={sticky ? 'navbar-link sticky' : 'navbar-link'}>
          {' '}
          <Link to='/books'>
            <LibraryBooksIcon sx={{ ...iconStyles }} />
          </Link>
        </div>

        {isAuthenticated ? (
          <>
            <div className={sticky ? 'navbar-link sticky' : 'navbar-link'}>
              <Link to='/dashboard'>
                <DashboardIcon sx={{ ...iconStyles }} />
              </Link>
            </div>
            <div className={sticky ? 'navbar-link sticky' : 'navbar-link'}>
              <Link to='/cart'>
                <div className='navbar-cart'>
                  <ShoppingCartIcon
                    className='cart-icon'
                    sx={{ ...iconStyles }}
                  />
                  <div className='navbar-cart-item-count'>{cartCount}</div>
                </div>
              </Link>
            </div>
            <div
              className={sticky ? 'navbar-link sticky' : 'navbar-link'}
              onClick={() => handleLogoutClick()}
            >
              <Link to='/'>
                <LogoutIcon sx={{ ...iconStyles }} />
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={sticky ? 'navbar-link sticky' : 'navbar-link'}>
              <Link to='/login'>
                <LoginIcon sx={{ ...iconStyles }} />
                Login
              </Link>
            </div>
          </>
        )}
      </div>

      <div className='hamburger-menu' onClick={toggleSidebar}>
        <MenuIcon fontSize={'large'} />
      </div>

      {!isWideScreen && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}
    </div>
  );
};
