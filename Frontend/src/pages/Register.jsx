import React from 'react'
import { Link } from 'react-router-dom';
import '../components/register/Register.scss'

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <header className="register-card__header">
          <h1>Create Account</h1>
          <p>Join us and start preparation</p>
        </header>
        <form className="register-card__form">
          <div className="form-group">
            <label htmlFor="email" className="form-group__label">
              Email
            </label>
            <input
              type="email"
              className="form-group__input"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstname" className="form-group__label">
                First Name :
              </label>
              <input
                id="firstname"
                className="form-group__input"
                placeholder="firstname"
                name="firstname"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="form-group__label">
                Last name
              </label>
              <input
                id="lastname"
                className="form-group__input"
                name="lastname"
                placeholder="lastName"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-group__label">
              Password
            </label>
            <input
              id="password"
              className="form-group__input"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a password"
              minLength={6}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary">
            Create Account
          </button>
              </form>
              
              {/* Element: The footer section of the register card */}
        <footer className='register-card__footer'>
          <p>
            Already have an account ? {" "}  
            <Link to="/login" className="link">
              Sign In
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Register