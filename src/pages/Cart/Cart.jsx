import './Cart.css';

import { Button } from '@mui/material';
import { useMemo } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

export const Cart = () => {
  const { cartItems, subtotalAmount, handleCheckout } = useCart();
  const { currentUser } = useAuth();

  const tax = 5;
  // useEffect(() => {
  //   console.log(cartItems);
  // console.log(purchaseData);
  // }, []);

  const totalAmount = useMemo(() => {
    return subtotalAmount + tax;
  }, [subtotalAmount]);

  const purchaseData = {
    purchaseItems: cartItems.map((item) => ({
      book: {
        id: item.bookDetails.id,
      },
      quantity: item.quantity,
      price: item.bookDetails.price,
    })),
    username: currentUser.username,
    subtotalAmount: subtotalAmount,
    tax: tax,
    totalAmount: totalAmount,
  };

  const handleButtonClick = (data) => {
    console.log(data);
    console.log(currentUser.username);
    console.log(currentUser.password);
    console.log(data);
    handleCheckout(data, currentUser.username, currentUser.password);
  };

  const buttonStyles = {
    width: '100%',
    backgroundColor: '#17242a',
    color: '#3aafa9',
    '&:hover': {
      backgroundColor: '#17242a',
    },
  };

  return (
    <div className='cart-container'>
      {cartItems.length > 0 ? (
        <>
          <table className='cart-table'>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              {cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.bookDetails.bookId}
                    bookDetails={item.bookDetails}
                    quantity={item.quantity}
                  />
                );
              })}
            </tbody>
          </table>
          <div className='total-price'>
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${subtotalAmount}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>+ $5.00</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${totalAmount}</td>
                </tr>
                <tr>
                  <td>
                    <Button
                      onClick={() => handleButtonClick(purchaseData)}
                      sx={{ ...buttonStyles }}
                    >
                      Checkout
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  );
};
