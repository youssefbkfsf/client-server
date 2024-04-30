

import{ useDispatch,useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useRef } from 'react'
import { UserLogin } from '../redux/slices/UserSlices'
const Login = () => {
  const email=useRef()
  const password=useRef()
  const {error,loadiing}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  return (
    


    
<>
<input type='email'placeholder='type your email'ref={email}></input>
<input type='password' placeholder='type your password'ref={password}></input>
<button onClick={()=>{dispatch(UserLogin({email:email.current.value,password:password.current.value}))}}>Login</button>
{error && <h3>loading.......</h3>}

      {error && <h3>loading.......</h3>}
  
 </>
  )    
}

export default Login
