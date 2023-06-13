import React from 'react'
import "./ExpenseItem.scss";
const ExpenseItem = () => {
    const expenseDate=new Date(2021,2,28);
    const expenseTitle='Car Insurance';
    const expenseAmount=294.67;
  return (
    <>
    <div className='expense-container'>
    <div className='expense-con'>
        <div>{expenseDate.toISOString()}</div>
        <div>{expenseTitle}</div>
        <div>{expenseAmount}</div>
    </div>
    </div>
    </>
  )
}

export default ExpenseItem;