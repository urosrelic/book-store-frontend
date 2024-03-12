/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export const NavItem = ({ name, url, closeSidebar, handleLogout }) => {
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
        {name}
      </Link>
    </>
  );
};
