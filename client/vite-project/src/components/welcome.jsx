import React, { useContext } from 'react'
import {SiEthereum } from 'react-icons/Si';
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from '../context/TransactionContext';
import { shortAddress } from '../utils/shortenAddress';
import Loader from './loader';

const Welcome = () => {
  const {connectWallet, currentAccount, formData,handlechange, sendTransactions, loading} = useContext(TransactionContext);

  const handleSubmit=(e)=>{

const {addressTo, amount, message, keyword}= formData;

   e.preventDefault();
   
  //  if (!addressTo || !amount || !message || !keyword) return;
   console.log('ii');
   sendTransactions();
  }

  return (
    <div className='welcome'>
      <div className='welcome1'>
        <div className='welcomeText'>
          <h1 className='para1 textGradient'>Send Ethers <br/>across the world</h1>
          <p className='para3'>Explore the crypto world. Buy and Sell <br/> cryptocurrency early on Ethpay </p>
          {!currentAccount && (
            <button type='button' onClick={connectWallet} className='connectBtn' >Connect Wallet</button>

          )}
          
        </div>
        <div className='ethCard'>
          <div className='ethCard1'>
          <div className='ethLogo'>
           < SiEthereum fontSize={21} color= 'white' />
            </div>
            <BsInfoCircle fontSize={20} color= ' black' cursor='pointer' />

          </div>
          <div className='ethCard2'>
            {shortAddress(currentAccount)}
            <p>Ethereum</p>
          </div>

        </div>
      </div>
      <div className='welcome2'>
        <div className='gridContainer'>

<table>
		<tbody>
			<tr>
				<td>Solidity</td>
				<td>Security</td>
				<td>Ethereum</td>
			</tr>
			<tr>
				<td>Web3.0</td>
				<td>Blockchain</td>
				<td>Low Fee</td>
			</tr>
		</tbody>
	</table>

        </div>
        <div className='form'>
          <form action='submit' >
            <div className='form1'>
            <div className='inputContainer'>
            <input type='text' autoComplete='off' placeholder='enter the address' value = {formData.addressTo} name='addressTo' onChange={handlechange}></input>
            </div>
            <div className='inputContainer'>
            <input type='number' autoComplete='off' placeholder='Amount' name='amount'value = {formData.amount} onChange={handlechange}></input>
            </div>
            <div className='inputContainer'>
            <input type='text' autoComplete='off' placeholder='message' name='message'value = {formData.message} onChange={handlechange}></input>
            </div>
            <div className='inputContainer'>
            <input type='text' autoComplete='off' placeholder='keyword' name='keyword'value = {formData.keyword}onChange={handlechange}></input>
            </div>
            
            <div className='line'></div>
            {loading ? (
              <Loader />
            ) : ( <button type='button' onClick={handleSubmit} className='sendBtn '>Send Now</button>)}
           
            </div>
          

          </form>
        </div>
      </div>
    </div>
  )
}

export default Welcome