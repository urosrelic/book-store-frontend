import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NavItem } from '../NavItem/NavItem';
import { Sidebar } from '../Sidebar/Sidebar';

import { useMediaQuery } from '@uidotdev/usehooks';
import './Navbar.css';

export const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isWideScreen = useMediaQuery('only screen and (min-width: 1000px)');

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

  return (
    <div className={sticky ? 'navbar sticky' : 'navbar'}>
      <h1 className='navbar-title'>
        book<span>store</span>
      </h1>

      <div className='navbar-links'>
        <NavItem name='Home' url='/' icon={<HomeIcon />} />
        <NavItem name='Books' url='/books' icon={<LibraryBooksIcon />} />
        {isAuthenticated ? (
          <>
            <NavItem
              name={'Dashboard'}
              url={'/dashboard'}
              icon={<DashboardIcon />}
            />
            <NavItem name={'Logout'} url={'/'} icon={<LogoutIcon />} />
          </>
        ) : (
          <>
            <NavItem name={'Login'} url={'/login'} icon={<LoginIcon />} />
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
