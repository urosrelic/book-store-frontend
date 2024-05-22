import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useAuth } from './useAuth';

export const PurchaseContext = createContext();

export const usePurchase = (username) => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentUser } = useAuth();

  const fetchPurchaseByUser = async () => {
    setLoading(true);
    try {
      // const response = await axios.get('/api/purchases/private/get_purchases', {
      //   params: { userId: id },
      // });

      const response = await axios.get(
        '/api/purchases/private/get-purchases',
        {
          params: { username: username },
        },
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
        {
          auth: {
            username: currentUser.username.trim(),
            password: currentUser.password.trim(),
          },
        }
      );
      setPurchases(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(`Error ${error.response.status}: ${error.response.data}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchaseByUser();
  }, [username]);

  return { purchases, loading, error };
};
