import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import { PurchaseItem } from '../PurchaseItem/PurchaseItem';
import './Purchases.css';

export const Purchases = ({ purchases }) => {
  const accordionProps = {
    width: '100%',
    backgroundColor: '#17242a',
    color: '#ffff',
    fontWeight: '500',
  };

  return (
    <div className='user-purchases'>
      {purchases.length > 0 ? (
        purchases.map((purchase) => (
          <Accordion key={purchase.id} sx={{ ...accordionProps }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#ffff' }} />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <div className='purchase-information'>
                <p>Purchase ID: {purchase.id}</p>
                <span id='purchase-information-date'>
                  Date: {new Date(purchase.date).toLocaleString()}
                </span>
              </div>
            </AccordionSummary>
            <hr className='book-details-separator' />
            <AccordionDetails>
              <p>Subtotal Amount: ${purchase.subtotalAmount}</p>
              <p>Tax: ${purchase.tax}</p>
              <p>Total Amount: ${purchase.totalAmount}</p>
              <h4>Purchase Items:</h4>
              {purchase.purchaseItems.map((item) => (
                <PurchaseItem key={item.purchaseItemId} purchaseItem={item} />
              ))}
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <p>No purchase history found.</p>
      )}
    </div>
  );
};
