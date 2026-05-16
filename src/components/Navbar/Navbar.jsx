

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import closeHamburger from '..//..//assets/closeHamburger.png';


const Navbar = () => {

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    // console.log('clicked');
    setHamburgerOpen(!hamburgerOpen)
  }

 


  return (
    <div className='navbarContainer'>
      <nav className='navbar'>

      {/* <div style={{color: 'red'}}>{hamburgerOpen ? 'OPEN' : 'CLOSED'}</div> */}
      
      <div className='hamburger' onClick={toggleHamburger}>
          {/* <Hamburger isOpen={hamburgerOpen}/> */}
          {hamburgerOpen ? (
            
              <img 
              src={closeHamburger}
              alt='close Menu'
              className='closeHamburger'
              />) : <Hamburger />}
            
        </div>

        <Logo />

        <ul className={hamburgerOpen ? 'navLinks active' : 'navLinks'}>
         
         
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/Dining'>DINING</Link></li>
          <li><Link to='/Romance'>ROMANCE</Link></li>
          <li><Link to='/Adventure'>ADVENTURE</Link></li>
          <li><Link to='/Hotel'>HOTEL</Link></li>
          <li><Link to='/Explore'>EXPLORE</Link></li>
         
        </ul>
    
      </nav>

      <div>
      
      </div>
    </div>
  )
}

export default Navbar;





// return (
//   <div className='navbarContainer'>
    
    
   
//     <nav className='navbar'>

//       <ul className={hamburgerOpen ? 'navLinks active' : 'navLinks'}>
//         <Logo />

//         <Hamburger />
       
//         <li><Link to='/'>HOME</Link></li>
//         <li><Link to='/Dining'>DINING</Link></li>
//         <li><Link to='/Romance'>ROMANCE</Link></li>
//         <li><Link to='/Adventure'>ADVENTURE</Link></li>
//         <li><Link to='/Hotel'>HOTEL</Link></li>
//         <li><Link to='/Explore'>EXPLORE</Link></li>
       
//       </ul>
  
//     </nav>

//     <div>
//       <div className='hamburger' onClick={toggleHamburger}>
//         <Hamburger  on={hamburgerOpen}/>
//       </div>
//     </div>
//   </div>
// )
// }