import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className='nav-links' activeClassName='active'>New York</NavLink>
      <NavLink to='/Mumbai' className='nav-links' activeClassName='active'>Mumbai</NavLink>
      <NavLink to='/Paris' className='nav-links' activeClassName='active'>Paris</NavLink>
      <NavLink to='/London' className='nav-links' activeClassName='active'>London</NavLink>
      
      </div>
  )
}             

export default Navbar
