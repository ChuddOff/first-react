import { useState } from 'react'

import './app-filter.css'

const AppFilter = ({filter, setFilter}) => {

    const [classOff, setClassOff] = useState('btn btn-light')
    const [classUp, setClassUp] = useState('btn btn-outline-light')
    const [class1000, setClass1000] = useState('btn btn-outline-light')

    const OffAll = () => {
        setClassOff('btn btn-outline-light')
        setClassUp('btn btn-outline-light')
        setClass1000('btn btn-outline-light')
    }

    return(
        <div className="btn-group app-filter">
            <button 
            className={classOff}
            type="button"
            onClick={() => {
                setFilter('Off')
                OffAll()
                setClassOff('btn btn-light')
                }}>
                Все сотрудникию
            </button>
            <button 
            className={classUp}
            type="button"
            onClick={() => {
                setFilter('Up')
                OffAll()
                setClassUp('btn btn-light')
                }}>
                На повышение
            </button>
            <button 
            className={class1000}
            type="button"
            onClick={() => {
                setFilter('1000')
                OffAll()
                setClass1000('btn btn-light')
                }}>
                З/П Ю 1000$
            </button>
        </div>
    )
}

export default AppFilter;