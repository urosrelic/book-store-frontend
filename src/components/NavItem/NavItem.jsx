/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

import './NavItem.css';

export const NavItem = ({ name, url, closeSidebar, icon }) => {
  const { handleLogout } = useAuth();
  const { removeCartCookie } = useCart();

  const handleClick = () => {
    if (name === 'Logout' && handleLogout) {
      handleLogout();
      removeCartCookie();
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
