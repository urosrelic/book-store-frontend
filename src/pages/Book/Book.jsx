import { useParams } from 'react-router-dom';
import { BookDetails } from '../../components/BookDetails/BookDetails';
import { useBookDetails } from '../../hooks/useBookDetails';

import './Book.css';

export const Book = () => {
  const { bookId } = useParams(); // Get the bookId from the route parameters
  const { bookDetails, loading, error } = useBookDetails(bookId);

  // useEffect(() => {
  //   if (bookDetails) {
  //     console.log(bookDetails.title);
  //   }
  // }, [bookDetails]);

  return (
    <div className='book'>
      {bookDetails ? (
        <BookDetails bookDetails={bookDetails} />
      ) : loading ? (
        <div className='book-details-loading'>
          <h1>Loading book details...</h1>
        </div>
      ) : (
        <div className='book-details-error'>{error}</div>
      )}
    </div>
  );
};
