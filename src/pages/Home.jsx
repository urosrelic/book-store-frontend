export const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-about'>
        <div className='home-about-main-text'>
          Find Your{' '}
          <span style={{ textDecoration: 'underline' }}>Favorite</span> Books.
        </div>
        <p className='home-about-paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          vitae rerum enim itaque dolorem ullam veniam dolor.
        </p>
        <button>Button</button>
      </div>
      <div className='home-image'>
        <img src='/public/hero_image.png' />
      </div>
    </div>
  );
};
