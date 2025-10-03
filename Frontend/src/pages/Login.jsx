import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
      <div>
          <div>
              <header>
                  <h1>Sign In</h1>
                  <p>Welcome back champ.</p>
              </header>
              <form>
                  <div>
                      <label htmlFor="login-email">Email</label>
                      <input type="email" id='login-email' name='email' autoComplete='email' placeholder='you@example.com' required />
                  </div>
                  <div>
                      <label htmlFor="login-password">Password</label>
                      <input type="password" id='login-password' name='login-password' autoComplete='current-password' placeholder="your password" required />
                  </div>
                  <button type='submit'>Sign In</button>
              </form>
              <p>
                  Need an account ? <Link to='/register'>Create one</Link>
              </p>
          </div>
    </div>
  )
}

export default Login