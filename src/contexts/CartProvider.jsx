import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        handleAddItem,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
