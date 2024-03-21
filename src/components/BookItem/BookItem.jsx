import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import './BookItem.css';
export const BookItem = ({
  bookId,
  title,
  authors,
  genres,
  imageUrl,
  price,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(bookId);
    navigate(`/books/book/${bookId}`);
  };

  const buttonStyles = {
    width: '50%',
    padding: '0.5srem',
    fontSize: '1rem',
    backgroundColor: '#17242a',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#17242a',
    },
  };

  return (
    <div className='book-item'>
      <div className='book-item-image'>
        <img src={imageUrl} onClick={handleClick} />
      </div>
      <span className='book-item-title'>{title}</span>
      <span className='book-item-author'>{authors}</span>
      <span className='book-item-categories'>Genres: {genres}</span>
      <span className='book-item-price'>${price}</span>
      <Button sx={{ ...buttonStyles }} onClick={handleClick}>
        See details
      </Button>
    </div>
  );
};
