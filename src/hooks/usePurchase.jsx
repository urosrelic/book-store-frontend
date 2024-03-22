import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const PurchaseContext = createContext();

export const usePurchase = (id) => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPurchaseByUser = async () => {
    try {
      const response = await axios.get('/api/order/get_orders', {
        params: { userId: id },
      });
      setPurchases(response.data);
      console.log(response.data);
    } catch (error) {
      setError(`Error ${error.response.status}: ${error.response.data}`);
    }
  };

  useEffect(() => {
    fetchPurchaseByUser();
  }, [id]);

  return { purchases, loading, error };
};
