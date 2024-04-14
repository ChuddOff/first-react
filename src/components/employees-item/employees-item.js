import { useState } from 'react'

import './employees-item.css';

const EmployeesItem = ({name, salary, increase, key, onDelete}) => {

    const [increaseOnClick, increaseChange] = useState(increase);
    const [starOnClick, starChange] = useState(false);

    console.log(key);

    let classNames = 'list-group-item d-flex justify-content-between'
    if (increaseOnClick) {
        classNames += ' increase'
    } if (starOnClick) {
        classNames += ' like'
    }

    return(
        <li className={classNames}>
            <span className="list-group-item-label"
            onClick={() => {starChange(!starOnClick)}}>{name}</span>
            <input 
            type="text" 
            className="list-group-item-input" 
            defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => {increaseChange(!increaseOnClick)}}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete(key)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesItem;