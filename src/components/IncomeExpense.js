import React,{useContext,useEffect,useState} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpense = () => {
  // get transactions from GlobalContext
  const {transactions}=useContext(GlobalContext);

  const [money,setMoney]=useState({
    income:0,
    expense:0
  });

  useEffect(()=>{
    const amounts=transactions.map((transaction)=>transaction.amount);
    const income=amounts
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc+=item),0).toFixed(2)
    console.log('income',income);

    let expense=amounts
    .filter(item=>item<0)
    .reduce((acc,item)=>(acc+=item),0)
    expense=(expense*-1).toFixed(2);
    console.log('expense',expense);
    
    setMoney({
      income:income,
      expense:expense
    })

  },[transactions])

  return (
    
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>
          ${money.income}
        </p>
      </div>

      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>
          ${money.expense}
        </p>
      </div>
    </div>
  )
}
