import axios from 'axios';
import { createContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [error, setError] = useState('');

  const handleAddItem = (bookDetails) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.bookDetails.bookId === bookDetails.bookId &&
        item.userId === bookDetails.userId
    );

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.length);
      toast.success('Item already in cart, updated the quantity');
    } else {
      // If the item doesn't exist in the cart, add it
      const newItem = { bookDetails, quantity: 1 };
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.length);
      toast.success('Item added succesfully');
    }
  };

  const handleRemoveItem = (bookDetails) => {
    const updatedCartItems = cartItems.filter(
      (item) =>
        !(
          item.bookDetails.bookId === bookDetails.bookId &&
          item.userId === bookDetails.userId
        )
    );
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.length);
    toast.success('Item removed succesfully');
  };

  const subtotalAmount = useMemo(() => {
    const amount = cartItems.reduce(
      (total, item) => total + item.quantity * item.bookDetails.price,
      0
    );

    return Math.round(amount * 100) / 100;
  }, [cartItems]);

  const handleQuantityChange = (bookDetails, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.bookDetails.bookId === bookDetails.bookId &&
      item.userId === bookDetails.userId
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (bookDetails) => {
    const existingItem = cartItems.find(
      (item) =>
        item.bookDetails.bookId === bookDetails.bookId &&
        item.userId === bookDetails.userId
    );

    if (existingItem) {
      const newQuantity = existingItem.quantity + 1;
      handleQuantityChange(bookDetails, newQuantity);
    }
  };

  const decreaseQuantity = (bookDetails) => {
    const existingItem = cartItems.find(
      (item) =>
        item.bookDetails.bookId === bookDetails.bookId &&
        item.userId === bookDetails.userId
    );

    if (existingItem) {
      const newQuantity = existingItem.quantity - 1;
      newQuantity > 0
        ? handleQuantityChange(bookDetails, newQuantity)
        : handleRemoveItem(bookDetails);
    }
  };

  const handleCheckout = async (data, username, password) => {
    console.log(username);
    try {
      const response = axios.post(
        '/api/purchases/private/place-purchase',
        data,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
        {
          auth: {
            username: username.trim(),
            password: password.trim(),
          },
        }
      );

      if (response.status === 201) {
        console.log('Order placed successfully');
        toast.success('Order placed successfully');
        setCartItems([]);
        setCartCount(0);
      } else {
        console.error('Failed to place order');
        toast.error('Failed to place order');
      }
    } catch (error) {
      setError(`Error ${error.response.status}: ${error.response.data}`);
      toast.error(`Error ${error.response.status}: ${error.response.data}`);
    }
  };

  return (
    <CartContext.Provider
      value={{
        error,
        cartItems,
        cartCount,
        subtotalAmount,
        handleCheckout,
        handleAddItem,
        increaseQuantity,
        decreaseQuantity,
        handleRemoveItem,
        handleQuantityChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
