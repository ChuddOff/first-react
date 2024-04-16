
import './employees-item.css';

const EmployeesItem = ({name, salary, increase, rise, onDelete, increaseToggle, riseToggle, id}) => {

    let classNames = 'list-group-item d-flex justify-content-between'
    if (increase) {
        classNames += ' increase'
    } if (rise) {
        classNames += ' like'
    }
    
    return(
        <li className={classNames}>
            <span className="list-group-item-label"
            onClick={() => riseToggle(id)}>{name}</span>
            <input 
            type="text" 
            className="list-group-item-input" 
            defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => increaseToggle(id)}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={() => onDelete(id)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesItem;