import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/useAuth';

import { Purchases } from '../Purchases/Purchases';
import './UserDetails.css';

export const UserDetails = () => {
  const { currentUser } = useAuth();

  // console.log(purchase);

  return (
    <div className='user-details'>
      <div className='user-information'>
        <AccountCircleIcon id='account-icon' />
        <h2>Welcome back {currentUser.username}</h2>
      </div>
      <div className='user-purchases'>
        <Purchases userId={currentUser.userId} />
      </div>
    </div>
  );
};
