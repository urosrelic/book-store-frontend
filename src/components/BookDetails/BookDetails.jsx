/* eslint-disable react/prop-types */
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import Rating from '@mui/material/Rating';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';

import './BookDetails.css';

import { useMediaQuery } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';
import { CartProvider } from '../../contexts/CartProvider';
import { BookQuotes } from '../BookQuotes/BookQuotes';

import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';

export const BookDetails = ({ bookDetails }) => {
  const navigate = useNavigate();
  const { handleAddItem } = useCart();
  const { currentUser } = useAuth();

  const isWideScreen = useMediaQuery('only screen and (min-width: 768px)');

  const ratingStyles = {
    fontSize: '1.3rem',
  };

  const handleRedirect = () => {
    navigate('/books');
  };

  const backButtonStyles = {
    color: '#17242a',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  };

  const cartButtonStyles = {
    backgroundColor: '#17242a',
    color: 'white',
    '&:hover': {
      color: '#3aafa9',
      backgroundColor: '#17242a', // Keep the same background color on hover
    },
    '&:focus': {
      color: '#3aafa9', // Keep the same background color on hover
      backgroundColor: '#17242a',
    },
  };

  const handleButtonClick = () => {
    handleAddItem(bookDetails, currentUser.userId);
  };

  const mobileLayout = () => {
    return (
      <CartProvider>
        <div className='back-button-container'>
          <Button onClick={handleRedirect} sx={{ ...backButtonStyles }}>
            <ArrowBackIcon />
            Go back
          </Button>
        </div>
        <div className='book-details'>
          <div className='book-details-grid-container'>
            <div className='book-details-container'>
              <div className='book-details-img'>
                <img src={bookDetails.imageUrl} />
              </div>
            </div>
            <div className='book-details-container'>
              <div className='book-details-title'>{bookDetails.title}</div>
              <div className='book-details-authors'>{bookDetails.authors}</div>
              <div className='book-details-edition'>
                {bookDetails.edition === ''
                  ? 'No edition information available'
                  : bookDetails.edition}
              </div>
              <div className='book-details-pages'>
                {bookDetails.numPages} pages
              </div>
              <div className='book-details-rating'>
                <span id='rating-value'>{bookDetails.rating}</span>
                <Rating
                  name='simple-controlled'
                  value={bookDetails.rating}
                  sx={{ ...ratingStyles }}
                  precision={0.5}
                />
              </div>
              <div className='book-details-price'>${bookDetails.price}</div>
              <div className='book-details-buy'>
                <Button
                  sx={{ ...cartButtonStyles }}
                  onClick={handleButtonClick}
                >
                  <AddShoppingCartIcon />
                  Add to cart
                </Button>
              </div>
              <hr className='book-details-separator' />
              <div className='book-details-quotes'>
                <BookQuotes
                  quote1={bookDetails.quote1}
                  quote2={bookDetails.quote2}
                  quote3={bookDetails.quote3}
                />
              </div>
              <div className='book-details-description'>
                <hr className='book-details-separator' />
                <p>{bookDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </CartProvider>
    );
  };

  const wideScreenLayout = () => {
    return (
      <>
        <div className='back-button-container'>
          <Button onClick={handleRedirect} sx={{ ...backButtonStyles }}>
            <ArrowBackIcon />
            Go back
          </Button>
        </div>
        <div className='book-details'>
          <div className='book-details-grid-container'>
            <div className='book-details-container-left'>
              <div className='book-details-img'>
                <img src={bookDetails.imageUrl} />
              </div>
              <div className='book-details-rating'>
                <span id='rating-value'>{bookDetails.rating}</span>
                <Rating
                  name='simple-controlled'
                  value={bookDetails.rating}
                  sx={{ ...ratingStyles }}
                  precision={0.5}
                />
              </div>
              <div className='book-details-price'>${bookDetails.price}</div>
              <div className='book-details-buy'>
                <Button
                  onClick={handleButtonClick}
                  sx={{ ...cartButtonStyles }}
                >
                  <AddShoppingCartIcon />
                  Add to cart
                </Button>
              </div>
            </div>
            <div className='book-details-container-right'>
              <div className='book-details-title'>{bookDetails.title}</div>
              <div className='book-details-authors'>{bookDetails.authors}</div>
              <div className='book-details-edition'>
                {bookDetails.edition === ''
                  ? 'No edition information available'
                  : bookDetails.edition}
              </div>
              <div className='book-details-pages'>
                {bookDetails.numPages} pages
              </div>

              <hr className='book-details-separator' />

              <div className='book-details-description'>
                <hr className='book-details-separator' />
                <p>{bookDetails.description}</p>
              </div>
              <div className='book-details-quotes'>
                <BookQuotes
                  quote1={bookDetails.quote1}
                  quote2={bookDetails.quote2}
                  quote3={bookDetails.quote3}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return isWideScreen ? wideScreenLayout() : mobileLayout();
};
