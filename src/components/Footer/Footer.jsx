import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Footer.css';

export const Footer = () => {
  const iconStyles = {
    fontSize: '2rem',
  };

  return (
    <div className='footer'>
      <div className='footer-upper'>
        <h1 className='footer-site-logo'>
          book<span>store</span>
        </h1>
        <div className='footer-media-links'>
          <FacebookIcon sx={{ ...iconStyles }} />
          <LinkedInIcon sx={{ ...iconStyles }} />
          <TwitterIcon sx={{ ...iconStyles }} />
        </div>
      </div>
      <div className='footer-lower'>
        © 2024 Uros Relic - All Rights Reserved.
      </div>
    </div>
  );
};
