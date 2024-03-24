/* eslint-disable react/prop-types */
import CancelIcon from '@mui/icons-material/Cancel';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../../hooks/useAuth';
import { NavItem } from '../NavItem/NavItem';

import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import './Sidebar.css';

export const Sidebar = ({ isOpen, onClose }) => {
  const { isAuthenticated } = useAuth();
  const { cartCount } = useCart();

  const cartIconStyles = {
    fontSize: '2.3rem',
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-content'>
        <div className='sidebar-close-btn'>
          <div className='sidebar-cart' onClick={onClose}>
            <Link to='/cart'>
              <ShoppingCartIcon
                className='cart-icon'
                sx={{ ...cartIconStyles }}
              />
            </Link>
            <div className='cart-item-count'>{cartCount}</div>
          </div>

          <CancelIcon className='sidebar-close-btn-icon' onClick={onClose} />
        </div>

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
          <NavItem
            name={'Search'}
            url={'/search'}
            closeSidebar={onClose}
            icon={<SearchIcon />}
          />
        </div>
      </div>
    </div>
  );
};
