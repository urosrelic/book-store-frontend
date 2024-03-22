import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Home.css';
export const Home = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate('/books');
  };

  const buttonStyles = {
    width: '200px',
    padding: '1rem',
    fontSize: '1.2rem',
    backgroundColor: '#17242a',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#17242a',
    },
  };

  return (
    <div className='home-container'>
      <div className='home-main-text'>Find Your Favorite Books</div>
      <div className='home-main-logo'>
        book<span>store</span>
      </div>
      <div className='home-paragraph'>
        <div className='home-paragraph-quote'>
          “Life is a learning experience, only if you learn.”
        </div>
        <div className='home-paragraph-quote-author'>
          <span>Yogi Berra</span>
        </div>
      </div>
      <Button onClick={handleBtnClick} sx={{ ...buttonStyles }}>
        Get Started
      </Button>
    </div>
  );
};
