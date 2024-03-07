import { Link } from 'react-router-dom';

export const NavItem = ({ name, url }) => {
  return (
    <>
      <Link to={url} className='nav-item'>
        {name}
      </Link>
    </>
  );
};
