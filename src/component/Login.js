

import{ useDispatch,useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useRef } from 'react'
const Login = () => {
  const email=useRef()
  const password=useRef
  return (
    const {error,loadiing}=useSelector(state=>state.user)


    
constdispatch=useDispatch()
<input.type='email'.placeholder='type your email'ref={email}></input>
<input type='password' placeholder='type your password'ref={password}></input>
<button onClick={{dispatch(UserLogin)}}>Login</button>
{error && <h3>loading.......</h3>}

      {error && <h3>loading.......</h3>}
  
email: email.current.value
password:current.password
    <div>
      Login
    </div>
  )
}

export default Login
