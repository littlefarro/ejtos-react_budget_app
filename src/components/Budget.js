import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const { dispatch  } = useContext(AppContext);
    const onChangeHandler = value => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0)
        if (value > 20000){
            alert("Budget cannot exceed 20,000");
        } else if (value < totalExpenses) {
            alert("Budget cannot be lower than spending");
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            <label>Budget: </label> 
             <input 
                type='number' 
                value={budget}
                onChange={(e) => onChangeHandler(e.target.value)}
                step='10'>
            </input>
        </div>
    );
};

export default Budget;