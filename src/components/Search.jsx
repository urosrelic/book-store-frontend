import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

import { Button } from './Button/Button.styled';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearText = () => {
    setQuery('');
  };

  const buttonStyles = {
    width: '3rem',
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
          <input
            type='text'
            value={query}
            onChange={handleInputChange}
            placeholder='Enter search criteria...'
          />
          <CancelIcon className={cancelButtonClass} onClick={clearText} />
        </div>
        <Button className='search-button' styles={buttonStyles}>
          <SearchIcon className='search-icon' />
        </Button>
      </div>
    </div>
  );
};
