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
        <div className='sidebar-links'>
          {isAuthenticated && (
            <div className='sidebar-authenticated'>
              <div className='authenticated-user'>
                Welcome back: {currentUser.username}
              </div>
              <NavItem
                name={'Logout'}
                closeSidebar={onClose}
                handleLogout={handleLogout}
              />
            </div>
          )}

          {!isAuthenticated && (
            <div className='sidebar-not-authenticated'>
              <NavItem name={'Login'} url={'/login'} closeSidebar={onClose} />
            </div>
          )}
          {/* Always show */}
          <NavItem name={'Home'} url={'/'} closeSidebar={onClose} />
          <NavItem name={'Books'} url={'/books'} closeSidebar={onClose} />
        </div>
      </div>
    </div>
  );
};
