import React from 'react'
import logo1 from '../../images/logo1.png';


const Footer = () => {
  return (
    <div className='footerContainer'>

      <div className='footerSection1'>
      <div className='footerLogo'>
        <img src={logo1}></img>
        <p className='logoHeading'>ETHPAY</p>
      </div>
      <div className='footerItems'>
        <p>Market</p>
        <p>Exchange</p>
        <p>Tutorials</p>
        <p>Wallets</p>
      </div>
      </div>
      
      <div className='footerSection2'>
        <p className='footerHeading'>come join us <br></br>info@ethpaymastery.com</p>
      </div>

        <div className='footerLine'></div>

        <div className='footerSection3'>
          <p className='footerHeading1'>@ethpaymastery 2022</p>
          <p className='footerHeading2'>All rights reserved</p>

      </div>

    </div>
  )
}

export default Footer