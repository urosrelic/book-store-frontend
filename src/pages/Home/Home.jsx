import './Home.css';
export const Home = () => {
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
      <button id='get-started-btn'>Get Started</button>
    </div>
  );
};
