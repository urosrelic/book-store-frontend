import { useAuth } from '../../hooks/useAuth';
export const UserDetails = () => {
  const { currentUser } = useAuth();
  return (
    <div className='user-details'>
      <h1>
        Welcome back{' '}
        <span className='dashboard-user'>{currentUser.username}</span>{' '}
      </h1>
    </div>
  );
};
