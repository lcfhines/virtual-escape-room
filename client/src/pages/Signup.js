import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token)
        } catch (e) {
            console.log(e)
        };
    };

    return (
        <main className="flex-row justify-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
              <div className="card-body">
                {data ? (
                  <p>
                    Welcome to Virtual Escape Room, {data.first_name}! Click{' '}
                    <Link to="/">here</Link>{' '}to return to the homepage.
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className="form-input"
                      placeholder="First name"
                      name="first_name"
                      type="text"
                      value={formState.first_name}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Last name"
                      name="last_name"
                      type="text"
                      value={formState.last_name}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
    
                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      );
};

export default Signup;