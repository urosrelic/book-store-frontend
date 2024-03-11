import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputField } from '../components/InputField/InputField.styled';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

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
        const response = await axios.post('/api/users', formData);
        if (response.status === 201) {
          console.log('User registered successfully');
          // Optionally, you can redirect the user to another page or perform other actions
        } else {
          console.error('Failed to register user');
          // Handle the error, show a message to the user, etc.
        }
      } catch (error) {
        console.error('Error:', error);
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

        <button className='submit-btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
