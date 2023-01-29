import React from 'react'
import { Link } from 'react-router-dom'
import navbar from './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='detail'>Detail</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Navbar