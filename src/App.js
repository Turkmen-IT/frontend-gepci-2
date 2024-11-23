import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* Header with Twitter Logo */}
      <header className="App-header">
        <FontAwesomeIcon icon={faTwitter} className="twitter-logo" />
      </header>

      {/* Login Form */}
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default App;
