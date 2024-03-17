import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/useAuth';
export const UserDetails = () => {
  const { currentUser } = useAuth();
  return (
    <div className='user-details'>
      <div className='user-avatar'>
        <AccountCircleIcon id='account-icon' />
      </div>
      <div className='user-information'>
        <h2>Welcome back {currentUser.username}</h2>
      </div>
    </div>
  );
};
