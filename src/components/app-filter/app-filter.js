import './app-filter.css'

const AppFilter = () => {
    return(
        <div className="btn-group app-filter">
            <button 
            className="btn btn-light"
            type="button">
                Все сотрудникию
            </button>
            <button 
            className="btn btn-outline-light"
            type="button">
                На повышение
            </button>
            <button 
            className="btn btn-outline-light"
            type="button">
                З/П Ю 1000$
            </button>
        </div>
    )
}

export default AppFilter;