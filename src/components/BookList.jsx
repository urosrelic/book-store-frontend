import axios from 'axios';
import { useEffect, useState } from 'react';
import { Book } from './Book';

export const BookList = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [page, setPage] = useState(0); // Current page number
  const [pageSize, setPageSize] = useState(10); // Number of items per page

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/books?page=${page}&size=${pageSize}`);
        setLoading(false);
        console.log(res.data);
        setBooks(res.data.content); // Assuming the response contains 'content' field with the actual data
      } catch (error) {
        const { status, data } = error.response;
        setError(`Error (${status}): ${data.message}`);
      }
    };

    fetchData();
  }, [page, pageSize]); // Execute effect when page or pageSize changes

  return (
    <div className='book-list'>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading data</h1>
      ) : (
        books && books.map((book) => <Book key={book.id} {...book} />)
      )}
      <button
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Next Page
      </button>
    </div>
  );
};
