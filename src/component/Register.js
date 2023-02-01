import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { NavLink } from 'react-router-dom'
import './Register.css'

function Register() {
  const [user, setUser] = useState({})
  // const navigate = useNavigate()
  function handSubmit(e){
    e.preventDefault()
  //  fetch("http://localhost:4100/api/auth/register", {
  //   method: "POST", 
  //   body: JSON.stringify(user),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  //  }).then((res) =>{
  //   console.log("register done")
  //   if (res.status === 200){
  //     navigate("/login")
  //   }
  //   else{
  //     alert("Unauthorized Request")
  //   }
  //  })
  //  .catch((err)=> {
  //   console.log(err)
  //  })
  }
  return (
    <>
    <Header/>
    <div className='container-register shadow-sm rounded border' >
    <h2 className='login-logo'>Sing Up</h2>
      <form className="row g-3">
  <div className="col-12">
        <input type="text" className="form-control shadow-sm p-3 mb-2 bg-body-tertiary rounded" id="inputAddress" placeholder='First Name'
     onInput={(e)=>{
      user.name=e.target.value
      setUser(user)
    }} value={user.firstName}/>
  </div>
  <div className="col-12">
    <input type="text" className="form-control shadow-sm p-3 mb-2 bg-body-tertiary rounded" id="inputAddress" placeholder='Last Name'
     onInput={(e)=>{
      user.name=e.target.value
      setUser(user)
    }} value={user.lastName}/>
  </div>
  <div className="col-12">
    <input type="email" className="form-control shadow-sm p-3 mb-2 bg-body-tertiary rounded" id="inputEmail4" placeholder='Email'
    onInput={(e)=>{ 
      user.email=e.target.value
      setUser(user)
    }} value={user.email}/>
  </div>
  <div className="col-12">
    <input type="password" className="form-control shadow-sm p-3 mb-2 bg-body-tertiary rounded" id="inputPassword4" placeholder='Password'
     onInput={(e)=>{
      user.password=e.target.value
      setUser(user)
    }} value={user.password}/>
  </div>
  <div className="col-12">
    <input type="password" className="form-control shadow-sm p-3 mb-2  bg-body-tertiary rounded" id="inputPassword4" placeholder='Password Confirm'
     onInput={(e)=>{
      user.conPassword=e.target.value
      setUser(user)
    }} value={user.coPassword}/>
  </div>
  <div id="emailHelp" className="form-text">Already have an account? Login <NavLink  to="/login">here.</NavLink></div>
  <div className="d-grid gap-2 login-button col-12"><button onClick={handSubmit} type="submit" className="btn btn-primary">Submit</button></div>
</form>
    </div>
    </>
  )
}

export default Register
