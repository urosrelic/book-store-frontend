import { Button } from './Button/Button.styled';

export const BookItem = ({
  id,
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
      <Button styles={buttonStyles}>See details</Button>
    </div>
  );
};
