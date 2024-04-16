import { useState } from 'react'

import './employees-add.css';

const EmployeesAdd = ({data, newEmployee}) => {

    

    const [text, setText] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text && number) {
            newEmployee({ name: text, salary: number, increase: false, rise: false, id: data.length + 1 });
            setText('');
            setNumber('');
        }
    };

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit={handleSubmit}>
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
                    className="btn btn-outline-light">
                Добавить
                </button>
            </form>
        </div> 
    )
}
export default EmployeesAdd;