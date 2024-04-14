import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import Employees from '../employees/employees';
import EmployeesAdd from '../employees-add/employees-add';

import './app.css';

function App() {

    const data = [
        {name: "Chudd Off", salary: 3000, increase: false, id: 1},
        {name: "Off", salary: 2000, increase: true, id: 2},
        {name: "Chudd", salary: 1000, increase: false, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="app-search">
                <SearchPanel />
                <AppFilter />
            </div>
            <Employees
            data = {data} />
            <EmployeesAdd />
        </div>
    )
}

export default App;