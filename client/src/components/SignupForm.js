import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    first_name: '',
    last_name: '',
    email: '', 
    password: '' });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group className='p-2'>
          <Form.Label htmlFor='firstname'>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your first name'
            name='first_name'
            onChange={handleInputChange}
            value={userFormData.first_name}
            required
          />
          <Form.Control.Feedback type='invalid'>First name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='p-2'>
          <Form.Label htmlFor='lastname'>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your last name'
            name='last_name'
            onChange={handleInputChange}
            value={userFormData.last_name}
            required
          />
          <Form.Control.Feedback type='invalid'>Last name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='p-2'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='p-2'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <div className='m-2'>
          <Button
            disabled={!(userFormData.first_name && userFormData.last_name && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default SignupForm;