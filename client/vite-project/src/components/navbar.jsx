import React from 'react'
// import {HiMenuAlt4} from 'react-icons/hi';
// import {AiOutlineClose} from 'react-icons/ai';
import './home.css'

import logo1 from '../../images/logo1.png';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='logo'>
      <img src={logo1} alt=''></img>
      <p className='logoHeading'>ETHPAY</p>
      </div>
      <div className='navbarItems'>
        <p>Market</p>
        <p>Exchange</p>
        <p>Tutorials</p>
        <p>Wallets</p>
        <button className='loginBtn'>Login</button>

      </div>
    </div>
  )
}

export default Navbar