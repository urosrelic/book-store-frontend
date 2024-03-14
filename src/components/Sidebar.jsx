/* eslint-disable react/prop-types */
import { NavItem } from './NavItem';
import CancelIcon from '@mui/icons-material/Cancel';

import { Search } from './Search';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
export const Sidebar = ({
  isOpen,
  onClose,
  isAuthenticated,
  setIsAuthenticated,
  currentUser,
  handleLogout,
}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-content'>
        <div className='sidebar-close-btn'>
          <h1 className='sidebar-title'>
            Book<span>store</span>
          </h1>
          <CancelIcon className='sidebar-close-btn-icon' onClick={onClose} />
        </div>
        <Search />

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
                icon={<LogoutIcon />}
              />
            </div>
          )}

          {!isAuthenticated && (
            <div className='sidebar-not-authenticated'>
              <NavItem
                name={'Login'}
                url={'/login'}
                closeSidebar={onClose}
                icon={<LoginIcon />}
              />
            </div>
          )}
          {/* Always show */}
          <NavItem
            name={'Home'}
            url={'/'}
            closeSidebar={onClose}
            icon={<HomeIcon />}
          />
          <NavItem
            name={'Books'}
            url={'/books'}
            closeSidebar={onClose}
            icon={<LibraryBooksIcon />}
          />
        </div>
      </div>
    </div>
  );
};
