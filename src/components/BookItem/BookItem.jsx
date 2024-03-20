import { useNavigate } from 'react-router-dom';
import { Button } from '../Button.styled';

import './BookItem.css';
export const BookItem = ({ bookId, title, authors, genres, imageUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(bookId);
    navigate(`/books/book/${bookId}`);
  };

  const buttonStyles = {
    width: '50%',
  };

  return (
    <div className='book-item'>
      <div className='book-item-image'>
        <img src={imageUrl} onClick={handleClick} />
      </div>
      <span className='book-item-title'>{title}</span>
      <span className='book-item-author'>{authors}</span>
      <span className='book-item-categories'>Genres: {genres}</span>
      <Button styles={buttonStyles} onClick={handleClick}>
        See details
      </Button>
    </div>
  );
};
