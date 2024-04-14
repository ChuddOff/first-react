import EmployeesItem from '../employees-item/employees-item';

import { useState } from 'react'
import './employees.css'

const Employees = ({data}) => {

    const [ban, banAdd] = useState([]);

    const el = data.map(item => {
        const {id, ...elseProps} = item;
        return (
            <EmployeesItem 
            {...elseProps} 
            key={id}
            onDelete={(idItem) => {
                console.log(idItem);
                return banAdd([...ban, idItem])
            }} />
        )
    }) 

    return (
        <ul className="app-list list-group employees">
            {el}
        </ul>
    )
}

export default Employees;