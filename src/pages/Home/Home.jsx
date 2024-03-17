import { useEffect, useState } from 'react';
import './Home.css';
export const Home = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1000);

  const smallScreenLayout = () => {
    return (
      <div className='home-container'>
        <div className='home-main-text'>
          Find Your <span>Favorite</span> Books.
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

  const wideScreenLayout = () => {
    return (
      <div className='home-container'>
        <div className='home-content'>
          <div className='home-main-text'>
            Find Your <span>Favorite</span> Books.
          </div>
          <p className='home-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vitae rerum enim itaque dolorem ullam veniam dolor.
          </p>
          <button id='get-started-btn'>Get Started</button>
        </div>

        <div className='home-image'>
          <img src='/hero_image.png' />
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isWideScreen ? wideScreenLayout() : smallScreenLayout();
};
