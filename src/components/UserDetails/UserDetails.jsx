import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/useAuth';

import { Purchases } from '../Purchases/Purchases';
import './UserDetails.css';

import { usePurchase } from '../../hooks/usePurchase';

export const UserDetails = () => {
  const { currentUser } = useAuth();
  const { purchases, loading } = usePurchase(currentUser.username);

  // console.log(purchase);

  return (
    <div className='user-details'>
      <div className='user-information'>
        <AccountCircleIcon id='account-icon' />
        <h2>Welcome back {currentUser.username}</h2>
      </div>
      <div className='user-purchases'>
        {loading ? (
          <div className='user-purchases-loading'>
            <h1>Loading purchases ...</h1>
          </div>
        ) : (
          <>
            <h2>Purchase History:</h2>
            <Purchases purchases={purchases} />
          </>
        )}
      </div>
    </div>
  );
};
