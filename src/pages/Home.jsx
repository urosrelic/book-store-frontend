export const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-main-text'>
        Find Your <span style={{ textDecoration: 'underline' }}>Favorite</span>{' '}
        Books.
      </div>
      <div className='home-image'>
        <img src='/hero_image.png' />
      </div>
      <p className='home-paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        vitae rerum enim itaque dolorem ullam veniam dolor.
      </p>
      <button id='get-started-btn'>Get Started</button>
    </div>
  );
};
