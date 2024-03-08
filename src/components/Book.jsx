export const Book = ({
  id,
  title,
  authors,
  description,
  edition,
  format,
  um_pages,
  rating,
  genres,
  image_url,
  quote,
}) => {
  return (
    <div className='book'>
      <div className='book-image'>
        <img src={image_url} />
      </div>
      <span className='book-title'>{title}</span>
      <span className='book-author'>{authors}</span>
      <span className='book-categories'>Genres: {genres}</span>
    </div>
  );
};
