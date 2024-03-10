import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

export const Login = () => {
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post('/api/users/login', data);
      if (response.status === 200) {
        console.log('User logged in successfully');
      } else {
        console.error('Incorrect username or password');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label>Username:</label>
          <input type='text' name='username' {...register('username')} />
          {errors.username && (
            <div className='error-message'>{errors.username.message}</div>
          )}
        </div>
        <div className='form-control'>
          <label>Password:</label>
          <input type='password' name='password' {...register('password')} />
          {errors.password && (
            <div className='error-message'>{errors.password.message}</div>
          )}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
