import { useEffect, useState } from 'react';

import axios from 'axios';

export const useBookDetails = (bookId) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBookDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/books/book/${bookId}`);
      setBookDetails(response.data);
    } catch (error) {
      setError(`Error: ${error.response.status} ${error.response.data}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);

  return { bookDetails, loading, error };
};
