import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  return (
      <div>
          <div>
              <header>
                  <h1>Create Account</h1>
                  <p>Join us and start preparation</p>
              </header>
              <form action="">
                  <div>
                      <label htmlFor="email">Email</label>
                      <input type="email" id='email' name='email' autoComplete='email' placeholder='you@example.com' required />
                  </div>
                  <div>
                      <div>
                          <label htmlFor="firstname">First Name : </label>
                          <input id='firstname' placeholder='firstname' name='firstname' required/>
                      </div>
                      <div>
                          <label htmlFor="lastname">Last name</label>
                          <input id='lastname' name='lastname' placeholder='lastName' required />
                      </div>
                  </div>
                  <div>
                      <label htmlFor="password">Password</label>
                      <input id='password' name='password' type='password' autoComplete='new-password' placeholder='Create a password' minLength={6} required />
                  </div>
                  <button type='submit'>Create Account</button>
              </form>
              <p>Already have an account ? <Link to={/login}>Sign In</Link></p>
          </div>
    </div>
  )
}

export default Register