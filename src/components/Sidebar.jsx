/* eslint-disable react/prop-types */
import CancelIcon from '@mui/icons-material/Cancel';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../hooks/useAuth';
import { NavItem } from './NavItem';
import { Search } from './Search';

export const Sidebar = ({ isOpen, onClose }) => {
  const { isAuthenticated, currentUser } = useAuth();

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
              <NavItem
                name='Dashboard'
                url='/dashboard'
                closeSidebar={onClose}
                icon={<DashboardIcon />}
              />
              <NavItem
                name={'Logout'}
                closeSidebar={onClose}
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
