import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState';
// form
export const AddTransaction = () => {
  const {addTransaction}=useContext(GlobalContext)
  const [text,setText]=useState('');
  const [amount,setAmount]=useState(0);
  const onSubmit=(e)=>{
    e.preventDefault();
    console.log('test');
    const newTransaction={
      id:Math.floor(Math.random()*1000000),
      text,
      amount:+amount
    }
    addTransaction(newTransaction);
    setAmount(0);
    setText('');
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id='form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Text</label>
          <input 
            type='text'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='Enter text...'
          />

          <label>Amount</label>
          <input 
            type='number'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='Enter amount...'
          />

          <button className='btn'>Add transaction</button>
        </div>
        

      </form>
    </div>
  )
}
