import './app-info.css';

const AppInfo = ({all, up}) => {

    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {all}</h2>
            <h2>Премию  получат: {up}</h2>
        </div>
    )
}

export default AppInfo;