import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext';
import dummydata from '../utils/dummydata'
import Card from "./Card"
import useFetch from './UseFetch';

function TransactionCard(val){

  return(

    <Card 
 
    addressFrom={val.addressFrom}
    addressTo= {val.addressTo}
    amount= {val.amount}
    message= {val.message}
    timestamp = {val.timestamp}
    keyword = {val.keyword}
    />
  );
};

const Transactions = () => {
  const {currentAccount, transactions} = useContext(TransactionContext);

  return (
    <div className='transactionContainer'>
     
        {currentAccount ? ( <h3 className='transactionHeading'> Latest Transactions</h3>) : 
        ( <h3 className='transactionHeading'>Connect your account to see the latest Transactions</h3>)
  }
     
       
     <div className='latestTransactions'>
          {transactions.map(TransactionCard)}
       
        </div>
        </div>
   
  )
}

export default Transactions;