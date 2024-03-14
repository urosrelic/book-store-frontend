import { FaSearch } from 'react-icons/fa';
import { Button } from './Button/Button.styled';

export const Search = () => {
  const buttonStyles = {
    width: '5rem',
    height: '3rem',
    background: '#37a495',
    textColor: '#17242a;',
    hoverBackground: '#37a495',
    hoverTextColor: '#17242a',
  };

  return (
    <div className='search-container'>
      <div className='search-container-items'>
        <div className='search-box'>
          <FaSearch className='search-icon' />
          <input type='text' />
        </div>
        <Button className='search-button' styles={buttonStyles}>
          Search
        </Button>
      </div>
    </div>
  );
};
