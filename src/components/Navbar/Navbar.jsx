

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import Home from '../../pages/Home/Home';
import Dining from '../../pages/Dining/Dining';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <Link to='/'>HOME</Link>
        <Link to='/Dining'>DINING</Link>
      </nav>
    </div>
  )
}

export default Navbar;
