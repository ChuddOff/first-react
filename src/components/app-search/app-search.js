import { useState } from 'react';

import './app-search.css'

const SearchPanel = ({setSearch}) => {

    const [text, setText] = useState('');

    return (
        <input 
        type="text" 
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={text}
        onChange={(e) => {
            setText(e.target.value);
            setSearch(e.target.value);
        }}/>
    )
}
export default SearchPanel;