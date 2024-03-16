import { useAuth } from '../hooks/useAuth';
export const Dashboard = () => {
  const { currentUser } = useAuth();
  return (
    <div className='dashboard-container'>
      <h1>
        Welcome back{' '}
        <span className='dashboard-user'>{currentUser.username}</span>{' '}
      </h1>
    </div>
  );
};
