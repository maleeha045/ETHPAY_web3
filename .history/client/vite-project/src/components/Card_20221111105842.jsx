import React from 'react'
import dummydata from '../utils/dummydata';
import {shortAddress} from '../utils/shortenAddress';
import UseFetch from './UseFetch';

const Card = (props) => {

  const gifUrl = UseFetch(props.keyword);
  
  return (
    
    
    <div className='singleTransaction'>
        
      <a href={`https://goerli.etherscan.io/address/${props.addressFrom}`} target='_blank' rel='noreferrer'>
     <p className='addressFrom'>From: {shortAddress(props.addressFrom)}</p>
     </a>
     <a href={`https://goerli.etherscan.io/address/${props.addressTo}`} target='_blank' rel='noreferrer'>
         <p className='addressTo'>To: {shortAddress(props.addressTo)}</p>
     </a>
     <p className='amount'>Amount: {props.amount}</p>
     {props.message && (
      <>
       <br />
       <p className='message'> message: {props.message}</p>
       </>

     )}
     <div className='cardImg'>
      <img src={gifUrl || props.url} alt=''></img>
      </div>
   
      
     <div className='timeStamp'>
          <p>{props.timestamp}</p>
     </div>
        
        
    </div>
        

  )
}

export default Card