import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useCart } from '../../hooks/useCart';
import './CartItem.css';
export const CartItem = ({ bookDetails, quantity }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();
  const iconStyles = {
    color: '#17242a',
    cursor: 'pointer',
  };

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
              <a href='#'>Remove</a>
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
        <td>${bookDetails.price}</td>
      </tr>
    </>
  );
};
