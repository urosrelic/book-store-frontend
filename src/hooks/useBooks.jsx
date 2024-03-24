import axios from 'axios';
import { useEffect, useState } from 'react';

export const useBooks = (page, pageSize) => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Scroll to the top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/books?page=${page}&size=${pageSize}`);
        setLoading(false);
        setBooks(res.data.content);
        setTotalPages(Math.ceil(res.data.totalElements / pageSize));
      } catch (error) {
        const { status, data } = error.response;
        if (error.response && status === 500) {
          setError('Internal Server Error: Please try again later.');
        } else if (error.response) {
          setError(`Error (${status}): ${data.message}`);
        } else {
          setError('Network Error: Please check your internet connection.');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize]);

  return { books, loading, error, totalPages };
};
