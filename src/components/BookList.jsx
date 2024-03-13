import axios from 'axios';
import { useEffect, useState } from 'react';
import { Book } from './Book';

export const BookList = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/books');
        setLoading(false);
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        const { status, data } = error.response;
        setError(`Error (${status}): ${data.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='book-list'>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading data</h1>
      ) : (
        books && books.map((book) => <Book key={book.id} {...book} />)
      )}
    </div>
  );
};
