import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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

      <h2 style={{alignSelf:'center', paddingRight:'3%', paddingTop:'10%'}}>Signup</h2>

      <form onSubmit={handleFormSubmit} style={{alignSelf:'center'}}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name </label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name </label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email </label>
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
        <div style={{display:'flex', justifyContent:'center', paddingTop:'5%'}}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul style={{listStyleType: "none", alignSelf:'center', paddingRight:'5%', paddingTop:'10%'}}>
      <li><Link to="/">Return to Home </Link></li>
      </ul>
    </div>
  );
}

export default Signup;
