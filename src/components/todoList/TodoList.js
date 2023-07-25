import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TodoListItem from "../todoListItem/TodoListItem";

import './todoList.scss';

const TodoList = ({ data, onDelete, onToggleStatus }) => {
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
		const { id, ...itemProps } = item;

		return (
			<CSSTransition
				classNames={'list__item'}
				timeout={500}
				key={id}>
				<TodoListItem
					{...itemProps}
					onDelete={() => onDelete(id)}
					onToggleStatus={(event) => onToggleStatus(id, event.currentTarget.getAttribute('data-toggle'))}
				/>
			</CSSTransition>
		)
	})

	return (
		<div className="list">
			<div className="list__filters">
				<button onClick={() => filterItems('all')}>Все</button>
				<button onClick={() => filterItems(true)}>Завершенные</button>
				<button onClick={() => filterItems(false)}>Незавершенные</button>
			</div>
			<TransitionGroup className="list__container">
				{elements}
			</TransitionGroup>
		</div>
	)
}

export default TodoList;