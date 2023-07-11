import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the necessary hook from react-router-dom
import './LoginForm.css';

const LoginForm = () => {
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();
  // Function to handle the "Sign Up" button click
  const handleSignUpClick = () => {
    // Redirect to the sign-up page when "Sign Up" button is clicked
    navigate('/signup');
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="username" />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="password" />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />Remember Me
              </div>
              <div className="form-group">
                <input type="submit" value="Login" className="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div className="card-footer">
            {/* "Sign Up" button triggers the handleSignUpClick function */}
            <div className="d-flex justify-content-center links">
              Don't have an account? <button className="btn-link" onClick={handleSignUpClick}>Sign Up</button>
            </div>
            <div className="d-flex justify-content-center">
              <a href="/signup">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
