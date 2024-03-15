import { useEffect, useState } from 'react';
import axios from 'axios';
import { InputField } from '../components/InputField/InputField.styled';
import { Button } from '../components/Button/Button.styled';
import { Link, useNavigate, redirect } from 'react-router-dom'; // Import the useHistory hook
import { ErrorMessage } from '../components/ErrorMessage';

export const Login = ({ handleLogin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [responseError, setResponseError] = useState(''); // State to hold error message
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (validateForm()) {
      try {
        const response = await axios.get('/api/auth/login', {
          params: {
            username: formData.username,
            password: formData.password,
          },
        });
        console.log(response.data);

        if (response.status === 200) {
          console.log('User logged in successfully');
          alert('User logged in successfully');
          handleLogin(response.data);
          navigate('/'); // Redirect to '/' after successful login
        } else {
          console.error('Incorrect username or password');
        }
      } catch (error) {
        console.error('Error: ', error);
        setResponseError('Error: ' + error.response.data);
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
          value={formData.username}
          onChange={handleInputChange}
          errorMessage={errors.username}
        />
        <InputField
          id='password-input'
          labelName='Password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleInputChange}
          errorMessage={errors.password}
        />
        <Button type='submit'>Submit</Button>
        <ErrorMessage message={responseError} />
        {/* Display error message */}
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
