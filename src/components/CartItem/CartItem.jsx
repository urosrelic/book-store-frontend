import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';
import './CartItem.css';
export const CartItem = ({ bookDetails, quantity }) => {
  const { increaseQuantity, decreaseQuantity, handleRemoveItem } = useCart();

  const iconStyles = {
    color: '#17242a',
    cursor: 'pointer',
  };

  const subtotal = useMemo(() => {
    return Math.round(quantity * bookDetails.price * 100) / 100;
  }, [quantity]);

  return (
    <>
      <tr>
        <td>
          <div className='cart-info'>
            <div className='cart-item-img'>
              <img src={bookDetails.imageUrl} />
            </div>
            <div className='cart-details'>
              <span>{bookDetails.title}</span>
              <br></br>
              <span>${bookDetails.price}</span>

              <br></br>
              <div
                className='cart-remove-item-btn'
                onClick={() => handleRemoveItem(bookDetails)}
              >
                Remove
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className='cart-quantity'>
            <RemoveCircleOutlineIcon
              onClick={() => decreaseQuantity(bookDetails)}
              sx={{ ...iconStyles }}
            />
            <span>{quantity}</span>
            <AddCircleIcon
              sx={{ ...iconStyles }}
              onClick={() => increaseQuantity(bookDetails)}
            />
          </div>
        </td>
        <td>${subtotal}</td>
      </tr>
    </>
  );
};
