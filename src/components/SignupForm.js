import React, { useState } from 'react';

const SignupForm = () => {
  // State variable to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
// Function to handle input field changes
  const handleChange = (e) => {
    // Update the corresponding form field in the state
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic or API call here
    console.log(formData); // Example: Log form data to the console
    // Reset form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
