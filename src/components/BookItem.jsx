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
    <div className='book'>
      <div className='book-image'>
        <img src={imageUrl} />
      </div>
      <span className='book-title'>{title}</span>
      <span className='book-author'>{authors}</span>
      <span className='book-categories'>Genres: {genres}</span>
      <Button styles={buttonStyles} onClick={handleClick}>
        See details
      </Button>
    </div>
  );
};
