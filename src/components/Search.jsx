import { FaSearch } from 'react-icons/fa';
import { Button } from './Button/Button.styled';
import { MdCancel } from 'react-icons/md';
import { useState } from 'react';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearText = () => {
    setQuery('');
  };

  const buttonStyles = {
    width: '5rem',
    height: '3rem',
    background: '#37a495',
    textColor: '#17242a;',
    hoverBackground: '#37a495',
    hoverTextColor: '#17242a',
  };

  const cancelButtonClass =
    query.length > 0 ? 'clear-text-btn active' : 'clear-text-btn';

  return (
    <div className='search-container'>
      <div className='search-container-items'>
        <div className='search-box'>
          <FaSearch className='search-icon' />
          <input type='text' value={query} onChange={handleInputChange} />
          <MdCancel className={cancelButtonClass} onClick={clearText} />
        </div>
        <Button className='search-button' styles={buttonStyles}>
          Search
        </Button>
      </div>
    </div>
  );
};
