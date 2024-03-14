import axios from 'axios';
import { useEffect, useState } from 'react';
import { Book } from './Book';
import { Button } from './Button/Button.styled';

import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';

export const BookList = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [page, setPage] = useState(0); // Current page number
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [totalPages, setTotalPages] = useState(0); // Total number of pages

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/books?page=${page}&size=${pageSize}`);
        setLoading(false);
        // console.log(res.data);
        setBooks(res.data.content); // Assuming the response contains 'content' field with the actual data
        setTotalPages(Math.ceil(res.data.totalElements / pageSize)); // Calculate total pages
      } catch (error) {
        const { status, data } = error.response;
        setError(`Error (${status}): ${data.message}`);
      }
    };

    fetchData();
  }, [page, pageSize]); // Execute effect when page or pageSize changes

  const buttonStyles = {
    width: '3rem',
  };

  return (
    <div className='book-list-container'>
      <div className='book-list'>
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <h1>Loading data</h1>
        ) : (
          books && books.map((book) => <Book key={book.id} {...book} />)
        )}
      </div>
      <div className='book-pagination'>
        <Button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0}
          styles={buttonStyles}
        >
          <FaLessThan />
        </Button>
        <div className='pages'>
          Page <span>{page + 1}</span> of {totalPages}
        </div>

        <Button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          styles={buttonStyles}
        >
          <FaGreaterThan />
        </Button>
      </div>
    </div>
  );
};
