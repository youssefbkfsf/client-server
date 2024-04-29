import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Navbar from './component/navbar'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
    <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
    
    </div>
  )
}

export default App
