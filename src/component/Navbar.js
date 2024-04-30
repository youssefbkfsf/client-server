import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {isAuth}=useSelector(state=>state.user)
  return (
    
    <div>
    <Link to="/profile">Profile</Link>
<Link to="/login">Login</Link>
<Link to="/profile">Profile</Link>
    <div>
      navbar
    </div>
    <button>logout</button> 
    </div>
  )
}

export default Navbar
