import React, { useRef } from 'react'


const Register = () => {
  const e=useRef()
  const p=useRef()
  return (
    <div>
      <input type='email' placeholder='type your email'ref={e}></input>
      <input type='password' placeholder='type your password'ref={p}></input>
      <button onClick={()=>
      console.log(e.current.value,p.current.value)
      }>Register</button>
    </div>
  )
}

export default Register
