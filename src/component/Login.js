import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <>
    <Header />
    <div className='container-login border shadow-sm '>
      <h2 className='login-logo'>Login</h2>
      <form>
  <div className="mb-3">
    
    <input type="email" className="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control shadow-sm p-3 mb-5 bg-body-tertiary rounded" id="exampleInputPassword1" placeholder='Password'/>
  </div>
  <div id="emailHelp" className="form-text">Don't have an account? Sing up <NavLink  to="/register">here.</NavLink></div>
  <div className="d-grid gap-2 login-button"><button type="submit" className="btn btn-primary">Submit</button></div>
</form>
    </div>
    </>
  )
}

export default Login
