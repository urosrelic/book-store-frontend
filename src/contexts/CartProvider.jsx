import Cookies from 'js-cookie';
import { createContext, useEffect, useMemo, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartToken = readCartCookie();
    if (cartToken) {
      const storedCartItems = JSON.parse(cartToken);
      setCartItems(storedCartItems);
      setCartCount(storedCartItems.length);
    }
  }, []);

  const addCartCookie = (items) => {
    let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    Cookies.set('cart_token', JSON.stringify(items), {
      expires: inFifteenMinutes,
    });
  };

  const removeCartCookie = () => {
    Cookies.remove('cart_token');
  };

  const readCartCookie = () => {
    return Cookies.get('cart_token');
  };

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
      addCartCookie(updatedCartItems);
    } else {
      // If the item doesn't exist in the cart, add it
      const newItem = { bookDetails, quantity: 1 };
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
      setCartCount(updatedCartItems.length);
      addCartCookie(updatedCartItems);
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
    updatedCartItems.length > 0
      ? addCartCookie(updatedCartItems)
      : removeCartCookie();
  };

  const totalAmount = useMemo(() => {
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
    addCartCookie(updatedCartItems);
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        totalAmount,
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
