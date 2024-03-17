/* eslint-disable react/prop-types */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Rating from '@mui/material/Rating';

import Typography from '@mui/material/Typography';

import { Button } from '../Button/Button.styled';

import { useState } from 'react';

export const BookDetails = ({ bookDetails }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyles = {
    backgroundColor: '#17242a',
    color: '#3aafa9',
  };

  const ratingStyles = {
    fontSize: '1.3rem',
  };

  return (
    <div className='book-details'>
      <div className='book-details-container'>
        <div className='book-details-name'>
          <span className='book-details-title'>{bookDetails.title}</span>
          <span className='book-details-authors'>{bookDetails.authors}</span>
        </div>
      </div>
      <div className='book-details-container'>
        <div className='book-details-img'>
          <img src={bookDetails.imageUrl} />
        </div>
        <div className='book-details-information'>
          <div className='book-details-edition'>
            {bookDetails.edition === ''
              ? 'No edition information available'
              : bookDetails.edition}
          </div>
          <div className='book-details-format'>{bookDetails.format}</div>
          <div className='book-details-pages'>{bookDetails.numPages} pages</div>
          <div className='book-details-rating'>
            <span id='rating-text'>Rating:</span>
            <span id='rating-value'>{bookDetails.rating}</span>
            <Rating
              name='simple-controlled'
              value={bookDetails.rating}
              sx={{ ...ratingStyles }}
            />
          </div>
          <div className='book-details-buy'>
            <Button>Buy</Button>
          </div>
        </div>
      </div>
      <div className='book-details-container'>
        <div className='book-details-quotes'>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{ ...accordionStyles }}
          >
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
              expandIcon={<ArrowDropDownIcon />}
            >
              <Typography>Quote #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bookDetails.quote1}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{ ...accordionStyles }}
          >
            <AccordionSummary
              aria-controls='panel2d-content'
              id='panel2d-header'
              expandIcon={<ArrowDropDownIcon />}
            >
              <Typography>Quote #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bookDetails.quote2}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{ ...accordionStyles }}
          >
            <AccordionSummary
              aria-controls='panel3d-content'
              id='panel3d-header'
              expandIcon={<ArrowDropDownIcon />}
            >
              <Typography>Quote #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{bookDetails.quote3}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
