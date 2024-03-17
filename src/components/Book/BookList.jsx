import { useState } from 'react';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { BookItem } from './BookItem';

import { useBooks } from '../../hooks/useBooks';

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
