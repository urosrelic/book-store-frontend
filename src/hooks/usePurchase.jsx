import axiosInstance from '../utils/api';
import { createContext, useEffect, useState } from 'react';

export const PurchaseContext = createContext();

export const usePurchase = (id) => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPurchaseByUser = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/purchases/get_purchases', {
        params: { userId: id }
      });
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
  }, [id]);

  return { purchases, loading, error };
};
