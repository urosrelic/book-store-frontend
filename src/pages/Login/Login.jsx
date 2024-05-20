import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button.styled';
import { InputField } from '../../components/InputField.styled';
import { useAuth } from '../../hooks/useAuth';
import './Login.css';

export const Login = () => {
  const { handleLogin, isAuthenticated } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('/api/public/login', {
          username,
          password,
        });

        if (response.status === 200) {
          console.log('User logged in successfully', response.data);
          toast.success('User logged in successfully');
          handleLogin(response.data);
          navigate('/');
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          toast.error('Error: ' + error.response.data);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          toast.error('Error: ' + error.message);
        }
      }
    }
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form id='login-form' onSubmit={onSubmit}>
        <InputField
          id='username-input'
          labelName='Username'
          name='username'
          type='text'
          value={username}
          onChange={handleInputChange}
          errorMessage={errors.username}
        />
        <InputField
          id='password-input'
          labelName='Password'
          name='password'
          type='password'
          value={password}
          onChange={handleInputChange}
          errorMessage={errors.password}
        />
        <Button type='submit'>Submit</Button>
        <p className='login-to-register-text'>
          Don&apos;t have an account? <br />
          Click{' '}
          <Link to='/register'>
            <span>here</span>
          </Link>{' '}
          to register
        </p>
      </form>
    </div>
  );
};
