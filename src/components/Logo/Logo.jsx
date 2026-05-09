import React from 'react'
import { Link } from 'react-router-dom'
// import pbLogo from '../../assets/pbLogo.jpeg';
import pbLogo from '../../assets/pbLogo5.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <Link to='./Landing' className='logoImgLink'>
      <img src={pbLogo} alt='Logo' className='logoImg' />


      {/* <span className='logoText'>TRAVEL PALM BEACH</span> */}
      </Link>
    </div>
  )
}

export default Logo
