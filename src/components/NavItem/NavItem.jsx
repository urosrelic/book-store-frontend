/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import './NavItem.css';

export const NavItem = ({ name, url, closeSidebar, icon }) => {
  const { handleLogout } = useAuth();

  const handleClick = () => {
    if (name === 'Logout' && handleLogout) {
      handleLogout();
    }
    closeSidebar();
  };
  return (
    <>
      <Link to={url} className='nav-item' onClick={handleClick}>
        <div className='nav-item-icon'>{icon}</div>
        <div className='nav-item-name'>{name}</div>
      </Link>
    </>
  );
};
