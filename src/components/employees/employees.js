import EmployeesItem from '../employees-item/employees-item';

import './employees.css'

const Employees = ({data, ban, filter, search, increaseToggle, riseToggle, onDelete}) => {
    let el = data.filter(item => {
        return item.name.split(" ").some(el => el.toLowerCase().startsWith(search.toLowerCase()))
    })

    switch (filter) {
        case 'Up':
            el = el.filter(item => item.increase === true);
            break;
        case '1000':
            el = el.filter(item => item.salary >= 1000)
            break;
        default:
            break;
    }

    const elResalt = el.filter(item => !ban.includes(item.id)).map(item => {
        const {id, ...elseProps} = item;
        return (
            <EmployeesItem 
            {...elseProps}
            onDelete = {idItem => onDelete(idItem)}
            id={id}
            increaseToggle = {id => increaseToggle(id)}
            riseToggle = {id => riseToggle(id)}
            key={id}/>
        )
    }) 

    return (
        <ul className="app-list list-group employees">
            {elResalt}
        </ul>
    )
}

export default Employees;