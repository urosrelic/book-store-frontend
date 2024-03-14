/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const NavItem = ({ name, url, closeSidebar, handleLogout, icon }) => {
  const handleClick = () => {
    if (handleLogout) {
      handleLogout();
      closeSidebar();
    } else {
      closeSidebar();
    }
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
