import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { InputField } from '../components/InputField/InputField';
import { Button } from '../components/Button/Button';

export const Login = ({
  isAuthenticated,
  setIsAuthenticated,
  setCurrentUser,
}) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const history = useHistory();

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
        const response = await axios.get('/api/users/login', {
          params: {
            username: formData.username,
            password: formData.password,
          },
        });
        console.log(response.data);

        if (response.status === 200) {
          console.log('User logged in successfully');
          // Optionally, you can redirect the user to another page or perform other actions
          setIsAuthenticated(true);
          setCurrentUser(response.data);
        } else {
          console.error('Incorrect username or password');
        }
      } catch (error) {
        console.error('Error: ', error);
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
      </form>
    </div>
  );
};
