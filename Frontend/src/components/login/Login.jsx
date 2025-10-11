import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <header className="login-card__header">
          <h1>Sign In</h1>
          <p>Welcome back champ.</p>
        </header>
        <form className="login-card__form">
          <div className="form-group">
            <label htmlFor="login-email" className="form-group__label">
              Email
            </label>
            <input
              className="form-group__input"
              type="email"
              id="login-email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password" className="form-group__label">
              Password
            </label>
            <input
              className="form-group__input"
              type="password"
              id="login-password"
              name="login-password"
              autoComplete="current-password"
              placeholder="your password"
              required
            />
          </div>
          <button type="submit" className="btn btn--primary">
            Sign In
          </button>
        </form>
        <footer className='login-card__footer'>
          <p>
            Need an account ? <Link to="/register" className='link'>Create one</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Login