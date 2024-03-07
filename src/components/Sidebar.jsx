/* eslint-disable react/prop-types */
import { NavItem } from './NavItem';
import { IoMdClose } from 'react-icons/io';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-close-btn'>
        <IoMdClose className='sidebar-close-btn-icon' onClick={onClose} />
      </div>
      <div className='sidebar-content'>
        <NavItem name={'Home'} url={'/'} />
        <NavItem name={'Books'} url={'/books'} />
      </div>
    </div>
  );
};
