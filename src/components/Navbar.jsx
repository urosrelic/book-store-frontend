import { useState, useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Sidebar } from './Sidebar';
import { NavItem } from './NavItem';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navbar'>
      <h1 className='navbar-title'>
        Book<span>store</span>
      </h1>

      {/* Render links only on wide screens */}
      {isWideScreen && (
        <div className='navbar-links'>
          <NavItem name={'Books'} url={'/books'} />
        </div>
      )}

      <div className='hamburger-menu' onClick={toggleSidebar}>
        <IoMdMenu />
      </div>

      {!isWideScreen && (
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      )}
    </div>
  );
};
