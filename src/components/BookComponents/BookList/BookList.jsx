import { useState } from 'react';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { BookItem } from '../BookItem/BookItem';

import { useBooks } from '../../../hooks/useBooks';

import { Button } from '@mui/material';
import './BookList.css';

export const BookList = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const { books, loading, error, totalPages } = useBooks(page, pageSize);

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
        <Button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0}
          sx={sxProp}
        >
          <ArrowCircleLeftIcon fontSize={'large'} />
        </Button>
        <div className='pages'>
          Page <span>{page + 1}</span> of {totalPages}
        </div>
        <Button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          sx={sxProp}
          disabled={page === totalPages - 1}
        >
          <ArrowCircleRightIcon fontSize={'large'} />
        </Button>
      </div>
    </div>
  );
};
