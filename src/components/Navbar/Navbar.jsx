import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Sidebar } from '../Sidebar/Sidebar';

import { useMediaQuery } from '@uidotdev/usehooks';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const { isAuthenticated, handleLogout } = useAuth();
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isWideScreen = useMediaQuery('only screen and (min-width: 1024px)');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
    fontSize: '1.5rem',
    color: '#17242a',
  };

  return (
    <div className={sticky ? 'navbar sticky' : 'navbar'}>
      <h1 className='navbar-title'>
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
            <div
              className={sticky ? 'navbar-link sticky' : 'navbar-link'}
              onClick={handleLogout}
            >
              <Link to='/'>
                <LogoutIcon sx={{ ...iconStyles }} />
              </Link>
              Logout
            </div>
          </>
        ) : (
          <>
            <div
              className={sticky ? 'navbar-link sticky' : 'navbar-link'}
              onClick={handleLogout}
            >
              <Link to='/login'>
                <LoginIcon sx={{ ...iconStyles }} />
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
