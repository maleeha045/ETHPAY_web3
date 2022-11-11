import React, {useState, useEffect} from "react";
import {ethers} from 'ethers';

import {contractAddress, contractABI} from '../utils/constants.js';

export const TransactionContext = React.createContext();

const {ethereum} = window;
const getEthereumContract = ()=>{

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer =  provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    
    console.log({signer, provider,transactionContract})
    return transactionContract;

}


export const TransactionProvider= ({children})=>{

    const [currentAccount, setCurrentAccount] = useState('')
    const [formData, setFormData] = useState({addressTo: '',amount: '',message: '',keyword: ''});
    const [loading, setLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState([])

    const handlechange=(e)=>{
       const name= e.target.name;
        setFormData((prevState) =>({ ...prevState, [name]: e.target.value }));
        // setFormData(prevState.formData.set([name]= e.target.value));
    }

    const getAllTransactions = async()=>{
        try {
            const transactionsContract = getEthereumContract();
            const availableTransactions = await transactionsContract.getAllTransactions();
            console.log("transaction :",availableTransactions);

            const structuredTransaction =  availableTransactions.map((transaction)=>({
                addressFrom : transaction.sender,
                addressTo : transaction.reciever,
                timestamp : new Date(transaction.timestamp.toNumber()*1000).toLocaleString(),
                message : transaction.message,
                keyword: transaction.keyword,
                amount : parseInt(transaction.amount._hex) / (10 ** 18)
               
              


            }))
            setTransactions(structuredTransaction);
        } catch (error) {
            
        }
    }
   

const checkIfWalletIsConnected = async()=>{
    try {
        if(!ethereum) return alert("please install metamask");
 const accounts = await ethereum.request({method: 'eth_accounts'});

 if(accounts.length){
    setCurrentAccount(accounts[0]);
    getAllTransactions();
  
 }
 else{
    console.log("no accounts found");
 }
 console.log(accounts);

    } catch (error) {
        console.log(error);
    }

}

const checkIfTransactionsExist = async()=>{
try{
    const transactionsContract = getEthereumContract();
    const transactionsCount = await transactionsContract.getTransactionCount();

    window.localStorage.setItem("transactionCount", transactionsCount);
    

}
catch(error){
    console.log(error);
}
   
}



const connectWallet = async()=>{
    try {
        if(!ethereum) return alert("please install metamask");
  accounts = await ethereum.request({method: 'eth_requestAccounts'});
  
 setCurrentAccount(accounts[0]);
     window.location.reload();
 
    } catch (error) {
        console.log(error);
        throw new Error("no ethereum object");
    }
}

const sendTransactions = async()=>{

    try {
        if(ethereum) {
           
        // get the data from form
        const {addressTo, amount, message, keyword}= formData;
        const transactionsContract = getEthereumContract();
        
        const parsedAmount = ethers.utils.parseEther(amount);
       
        await ethereum.request({
            method: 'eth_sendTransaction',
            params:[{
                from: currentAccount,
                to: addressTo,
                gas: "0x5208",
                value: parsedAmount._hex,

            }
            ],
        }); 
       
        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
        setLoading(true);
        console.log(`loading.. ${transactionHash.hash}`);

        await transactionHash.wait();
        console.log(`success.. ${transactionHash.hash}`);
        setLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
        }
        else {
            console.log("No ethereum object");
          }
    } catch (error) {
        console.log(error);
        throw new Error("no ethereum object"); 
    }
};

useEffect(()=>{
    checkIfWalletIsConnected();
    checkIfTransactionsExist();
    },[])


    return(
        <TransactionContext.Provider value={{connectWallet, currentAccount, handlechange, formData, loading, sendTransactions,transactions}}>
        {children}
        </TransactionContext.Provider>

    )
    
}
