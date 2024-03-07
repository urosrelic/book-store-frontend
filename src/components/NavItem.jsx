import { Link } from 'react-router-dom';

export const NavItem = ({ name, url, closeSidebar }) => {
  return (
    <>
      <Link to={url} className='nav-item' onClick={closeSidebar}>
        {name}
      </Link>
    </>
  );
};
