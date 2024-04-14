import { useState } from 'react'

import EmployeesItem from '../employees-item/employees-item';
import './employees-add.css';

const EmployeesAdd = () => {

    const NewEmployee = (text, number) => {
        if (text && number) {
            return <EmployeesItem name="Chudd Off" salary={text} increase={number}/>
        }
    }

    const [text, setText] = useState()
    const [number, setNumber] = useState()

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={text}
                    onChange={(e) => {setText(e.target.value)}} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={number}
                    onChange={(e) => {setNumber(+e.target.value)}} />

                <button type="submit"
                    className="btn btn-outline-light"
                    onSubmit={NewEmployee(text, number)}>Добавить</button>
            </form>
        </div> 
    )
}
export default EmployeesAdd;