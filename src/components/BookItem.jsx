import { useNavigate } from 'react-router-dom';
import { Button } from './Button/Button.styled';
export const BookItem = ({
  bookId,
  title,
  authors,
  description,
  edition,
  format,
  numPages,
  rating,
  genres,
  imageUrl,
  quote1,
  quote2,
  quote3,
}) => {
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
        <img src={imageUrl} />
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
