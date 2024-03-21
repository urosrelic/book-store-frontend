import './Cart.css';

import { Button } from '@mui/material';
import { useMemo } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { useCart } from '../../hooks/useCart';
export const Cart = () => {
  const { cartItems, subtotalAmount } = useCart();

  // useEffect(() => {
  //   console.log(cartItems);
  // }, []);

  const totalAmount = useMemo(() => {
    return subtotalAmount + 5;
  }, [subtotalAmount]);

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
          </table>
          <div className='total-price'>
            <table>
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
                  <Button sx={{ ...buttonStyles }}>Checkout</Button>
                </td>
              </tr>
            </table>
          </div>
        </>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  );
};
