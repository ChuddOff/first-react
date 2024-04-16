import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import Employees from '../employees/employees';
import EmployeesAdd from '../employees-add/employees-add';
import { useState } from 'react';

import './app.css';

function App() {
    
    const dataOrigin = [
        {name: "Chudd Off", salary: 3000, increase: false, rise: true, id: 1},
        {name: "Off", salary: 2000, increase: true, rise: false, id: 2},
        {name: "Chudd", salary: 1000, increase: false, rise: false, id: 3}
    ]

    const [data, setData] = useState(dataOrigin);
    
    const [ban, banAdd] = useState([]);

    const increaseToggle = (idOrigin) => {
        const index = data.findIndex(item => item.id === idOrigin);
        const dataItem = data[index];
        data[index] = {...dataItem, increase: !dataItem.increase};
        setData([...data]);
    }

    const riseToggle = (idOrigin) => {
        const index = data.findIndex(item => item.id === idOrigin);
        const dataItem = data[index];
        data[index] = {...dataItem, rise: !dataItem.rise};
        setData([...data]);
    }

    const [filter, setFilter] = useState('Off');

    const [search, setSearch] = useState('');


    return (
        <div className="app">
            <AppInfo />

            <div className="app-search">
                <SearchPanel
                setSearch = {txt => {
                    setSearch(txt)
                    }} />
                <AppFilter
                filter = {filter}
                setFilter = {filter => setFilter(filter)} />
            </div>
            <Employees
            data = {data}
            ban = {ban}
            filter = {filter}
            search = {search}
            increaseToggle = {id => increaseToggle(id)}
            riseToggle = {id => riseToggle(id)}
            onDelete ={(idItem) => {banAdd([...ban, idItem])}} />
            <EmployeesAdd 
            data = {data}
            newEmployee = {obj => setData([...data, obj])} />
        </div>
    )
}

export default App;