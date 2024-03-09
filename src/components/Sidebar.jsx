/* eslint-disable react/prop-types */
import { NavItem } from './NavItem';
import { IoMdClose } from 'react-icons/io';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-content'>
        <div className='sidebar-close-btn'>
          <h1 className='sidebar-title'>
            Book<span>store</span>
          </h1>
          <IoMdClose className='sidebar-close-btn-icon' onClick={onClose} />
        </div>
        <NavItem name={'Home'} url={'/'} closeSidebar={onClose} />
        <NavItem name={'Books'} url={'/books'} closeSidebar={onClose} />
        <NavItem name={'Register'} url={'/register'} closeSidebar={onClose} />
      </div>
    </div>
  );
};
