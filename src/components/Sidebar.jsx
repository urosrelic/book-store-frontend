/* eslint-disable react/prop-types */
import { NavItem } from './NavItem';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({
  isOpen,
  onClose,
  isAuthenticated,
  setIsAuthenticated,
  currentUser,
}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-content'>
        <div className='sidebar-close-btn'>
          <h1 className='sidebar-title'>
            Book<span>store</span>
          </h1>
          <IoMdClose className='sidebar-close-btn-icon' onClick={onClose} />
        </div>

        {/* Conditionally render User Details */}
        {isAuthenticated && (
          <>
            {/* // TODO instead of a welcome text render dashboard */}
            {'Welcome back: ' + currentUser.username}
          </>
        )}
        {/* Conditionally render "Register" and "Login" only if the user is not authenticated */}
        {!isAuthenticated && (
          <>
            <NavItem name={'Login'} url={'/login'} closeSidebar={onClose} />
          </>
        )}
        {isAuthenticated && (
          <>
            {' '}
            <NavItem
              name={'Logout'}
              closeSidebar={onClose}
              handleLogout={handleLogout}
            />
          </>
        )}

        {/* Always show */}
        <NavItem name={'Home'} url={'/'} closeSidebar={onClose} />
        <NavItem name={'Books'} url={'/books'} closeSidebar={onClose} />
      </div>
    </div>
  );
};
