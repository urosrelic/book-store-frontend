import { useState } from 'react';
import { useEffect } from 'react';

export const Footer = () => {
  const [date, setDate] = useState(new Date());

  const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  useEffect(() => {
    setDate(getCurrentYear());
  }, []);

  return (
    <div className='footer'>
      <div className='footer-upper'>
        <div className='footer-site-logo'>
          <img src='/public/logo.png' />
        </div>
        <div className='footer-media-links'>
          <img src='/facebook-svgrepo-com.svg' />
          <img src='/twitter-svgrepo-com.svg' />
          <img src='/linkedin-1-svgrepo-com.svg' />
        </div>
      </div>
      <div className='footer-lower'>
        © 2024 Uros Relic - All Rights Reserved.
      </div>
    </div>
  );
};
