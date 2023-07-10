import {useState, useEffect} from 'react';

import TodoListItem from "../todoListItem/TodoListItem";
import Button from "../button/Button";

import './todoList.scss';

const TodoList = ({data, onDelete, onToggleStatus}) => {
    const [filtered, setFiltered] = useState(data);

    // Для обновления стейта filtered когда приходит пропс data
    // Тк отрисовывается не стейт а filtered отфильтрованные данные
    useEffect(() => {
        setFiltered(data)
    }, [data]);

    // Фильтр
    const filterItems = (status) => {
        if (status === 'all') {
            setFiltered(data);
        } else {
            let filteredItems = [...data].filter(item => item.status === status);
            setFiltered(filteredItems)
        }
    }

    const elements = filtered.map(item => {
        const {id, ...itemProps} = item;

        return(
            <TodoListItem 
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleStatus={(event) => onToggleStatus(id, event.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return(
        <div className="list">
            <div className="list__filters">
                <button onClick={() => filterItems('all')}>Все</button>
                <button onClick={() => filterItems(true)}>Завершенные</button>
                <button onClick={() => filterItems(false)}>Незавершенные</button>
            </div>
            <ul className="list__container">
                {elements}
            </ul> 
        </div>
    )
}

export default TodoList;