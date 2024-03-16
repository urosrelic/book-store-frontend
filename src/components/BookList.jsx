import axios from 'axios';
import { useEffect, useState } from 'react';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { BookItem } from './BookItem';

export const BookList = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/books?page=${page}&size=${pageSize}`);
        setLoading(false);
        console.log(res.data);
        setBooks(res.data.content);
        setTotalPages(Math.ceil(res.data.totalElements / pageSize));
      } catch (error) {
        const { status, data } = error.response;
        setError(`Error (${status}): ${data.message}`);
      }
    };

    fetchData();
  }, [page, pageSize]); // Execute effect when page or pageSize changes

  const sxProp = {
    cursor: 'pointer',
    color: 'white',
  };

  return (
    <div className='book-list-container'>
      <div className='book-list'>
        {error ? (
          <h1>{error}</h1>
        ) : loading ? (
          <h1>Loading data</h1>
        ) : (
          books && books.map((book) => <BookItem key={book.bookId} {...book} />)
        )}
      </div>
      <div className='book-pagination'>
        <ArrowCircleLeftIcon
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0}
          fontSize={'large'}
          sx={sxProp}
        />
        <div className='pages'>
          Page <span>{page + 1}</span> of {totalPages}
        </div>

        <ArrowCircleRightIcon
          onClick={() => setPage((prevPage) => prevPage + 1)}
          fontSize={'large'}
          sx={sxProp}
        />
      </div>
    </div>
  );
};
