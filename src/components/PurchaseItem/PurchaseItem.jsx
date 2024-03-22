import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export const PurchaseItem = ({ purchaseItem }) => {
  const accordionProps = {
    margin: '0.5rem 0',
    width: '100%',
    backgroundColor: '#101a1f',
    color: '#ffff',
  };
  return (
    <div className='purchase-item'>
      <Accordion sx={{ ...accordionProps }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          {purchaseItem.book.title}
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Quantity {purchaseItem.quantity}</li>
            <li>Price: ${purchaseItem.price}</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
