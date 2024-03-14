import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputField } from '../components/InputField/InputField.styled';
import { Button } from '../components/Button/Button.styled';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const Register = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [responseError, setResponseError] = useState('');

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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (validateForm()) {
      try {
        const response = await axios.post('/api/auth/register', formData);
        if (response.status === 201) {
          console.log('User registered successfully');
          alert('User registered successfully');
          navigate('/login');
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error:', error);
        setResponseError('Error: ' + error.response.status);
      }
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <form id='register-form' onSubmit={onSubmit}>
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
          id='email-input'
          labelName='Email'
          name='email'
          type='text'
          value={formData.email}
          onChange={handleInputChange}
          errorMessage={errors.email}
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
        <InputField
          id='confirm-password-input'
          labelName='Confirm Password'
          name='confirmPassword'
          type='password'
          value={formData.confirmPassword}
          onChange={handleInputChange}
          errorMessage={errors.confirmPassword}
        />
        {responseError && <p className='error-message'>{responseError}</p>}{' '}
        <Button type='submit'>Register</Button>
        <p className='register-to-login-text'>
          Already have an account? <br />
          Click{' '}
          <Link to='/login'>
            <span>here</span>
          </Link>{' '}
          to login
        </p>
      </form>
    </div>
  );
};
