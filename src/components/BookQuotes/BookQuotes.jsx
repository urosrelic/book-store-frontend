import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export const BookQuotes = ({ ...quotes }) => {
  const [expanded, setExpanded] = useState(false);

  const accordionStyles = {
    backgroundColor: '#17242a',
    color: '#3aafa9',
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='book-quotes'>
      {Object.entries(quotes).map(([key, value], index) => (
        <Accordion
          key={key}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{ ...accordionStyles }}
        >
          <AccordionSummary
            aria-controls={`panel${index}d-content`}
            id={`panel${index}d-header`}
            expandIcon={<ArrowDropDownIcon />}
          >
            <Typography>{`Quote #${index + 1}`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{value}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
