import { useParams } from 'react-router-dom';
import { useBookDetails } from '../hooks/useBookDetails';
export const BookDetails = () => {
  const { bookId } = useParams(); // Get the bookId from the route parameters
  const { bookDetails, loading, error } = useBookDetails(bookId);

  // useEffect(() => {
  //   if (bookDetails) {
  //     console.log(bookDetails.title);
  //   }
  // }, [bookDetails]);

  return (
    <div className='book-details'>
      {bookDetails ? (
        <div className='book-details-title'>{bookDetails.title}</div>
      ) : loading ? (
        <div className='book-details-loading'>
          <h1></h1>
        </div>
      ) : (
        <div className='book-details-error'>{error}</div>
      )}
    </div>
  );
};
