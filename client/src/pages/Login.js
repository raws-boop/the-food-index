import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1" style={{display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft:'15%', paddingRight:'15%'}}>

      <h2 style={{alignSelf:'center', paddingRight:'3%', paddingTop:'10%'}}>Login</h2>
      <form onSubmit={handleFormSubmit} style={{alignSelf:'center'}}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address </label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end" style={{display:'flex', justifyContent:'center', paddingTop:'5%'}}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul style={{listStyleType: "none", alignSelf:'center', paddingTop:'10%'}}>
      <li><Link to="/">Return to Home</Link></li>
      </ul>
    </div>
  );
}

export default Login;
