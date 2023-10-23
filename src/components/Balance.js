import React,{useContext,useEffect,useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const [balance,setBalance]=useState(0);
  useEffect(()=>{
    const amountsArr=transactions.map(transaction=>transaction.amount);
    console.log('AmountsArr',amountsArr);
    const totalAmounts=amountsArr
    .reduce((acc,item)=>(acc +=item),0).toFixed(2);
    console.log('TotalAmounts',totalAmounts);
    setBalance(totalAmounts);
  },[transactions])
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  )
}
