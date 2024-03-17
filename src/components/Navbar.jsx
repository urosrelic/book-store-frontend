import { useEffect, useState } from 'react';
import { NavItem } from './NavItem';
import { Sidebar } from './Sidebar';

import MenuIcon from '@mui/icons-material/Menu';
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1000);
    };

    const handleScroll = () => {
      setSticky(window.scrollY >= 20);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={sticky ? 'navbar sticky' : 'navbar'}>
      <h1 className='navbar-title'>
        Book<span>store</span>
      </h1>

      {/* Render links only on wide screens */}
      {isWideScreen && (
        <div className='navbar-links'>
          <NavItem name={'Home'} url={'/'} />
          <NavItem name={'Books'} url={'/books'} />
          <NavItem name={'Register'} url={'/register'} />
          <NavItem name={'Login'} url={'/login'} />
        </div>
      )}

      <div className='hamburger-menu' onClick={toggleSidebar}>
        <MenuIcon fontSize={'large'} />
      </div>

      {!isWideScreen && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}
    </div>
  );
};
