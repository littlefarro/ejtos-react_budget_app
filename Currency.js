import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const onClickHandler = currency => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        })
    }
    return (
        <>
            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency ({currency})
                </button>
                <ul className="dropdown-menu border border-success" aria-labelledby="dropdownMenuButton1">
                    <li><button className="dropdown-item" onClick={(e) => onClickHandler(e.target.innerHTML)}>$ Dollar</button></li>
                    <li><button className="dropdown-item" onClick={(e) => onClickHandler(e.target.innerHTML)}>£ Pound</button></li>
                    <li><button className="dropdown-item" onClick={(e) => onClickHandler(e.target.innerHTML)}>€ Euro</button></li>
                    <li><button className="dropdown-item" onClick={(e) => onClickHandler(e.target.innerHTML)}>₹ Ruppee</button></li>
                </ul>
            </div>
        </>
    )
};

export default Currency;
