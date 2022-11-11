import React from 'react'
import {SiAdguard} from 'react-icons/Si';
import {BiSearchAlt} from 'react-icons/Bi';
import {RiHeart2Line} from 'react-icons/Ri';

const Services = () => {
  return (
    <div className='servicesSection'>
      <div className='servicesLine'>
      <h1 className='para2'>Services That We<br></br> Continue to Improve</h1>
      </div>
      <div className='servicesContainer'>
        

      <div className='servicesPoints'>
            <div className='securityLogo'>
             <SiAdguard />
            </div>
            <div className='pointsDescription'>
              <h4>Security Guaranteed</h4>
              <p className='para4'>Security is guaranteed. we always maintain privacy and quality of your products</p>
            </div>
      </div>

       <div className='servicesPoints'>
            <div className='searchLogo'>
             <BiSearchAlt />
            </div>
            <div className='pointsDescription'>
              <h4>Best Exchange Rate</h4>
              <p className='para4'>Security is guaranteed. we always maintain privacy and quality of your products</p>
           </div>
      </div>

        <div className='servicesPoints'>
            <div className='transactionLogo'>
             <RiHeart2Line />
            </div>
            <div className='pointsDescription'>
              <h4>Latest Transactions</h4>
              <p className='para4'>Security is guaranteed. we always maintain privacy and quality of your products</p>
            </div>
        </div>
        </div>

      </div>
   
  )
}

export default Services