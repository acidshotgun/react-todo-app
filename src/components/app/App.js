import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// content
import video from '../../resources/kurt.mp4';

// components
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import './app.scss';

const App = () => {
	// Начальное значение либо получается из local storage либо пустой массив
	const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
	// Кол-во тасков - это длина tasks
	const [taskCounter, setTaskCounter] = useState(tasks.length);

	// Когда состояние tasks меняется обновляется tasks в LS
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks]);

	const addItem = (newTask) => {
		setTasks(tasks => [...tasks, { name: newTask, status: false, id: uuidv4() }]);
		setTaskCounter(taskCounter => taskCounter + 1);
	}

	const deleteItem = (id) => {
		setTasks(tasks => tasks.filter(item => item.id !== id));
		setTaskCounter(taskCounter => taskCounter - 1);
	}

	// Метод заменяет св-во status в state у определенного элемента по id
	// Синтаксис [prop] позваляет вытащить зн-е из data-атрибута который передается
	// data-атрибут стоит у item
	const onToggleStatus = (id, prop) => {
		setTasks(tasks => tasks.map(item => {
			if (item.id === id) {
				return { ...item, [prop]: !item[prop] }
			}

			return item;
		}))
	}

	// В переменную записывается число - это длина массива где записаны только ообъекты у которых status = true
	const completedTusks = tasks.filter(item => item.status).length;

	return (
		<div className="app">
			<TodoForm
				taskCounter={taskCounter}
				onAdd={addItem}
				completedTusks={completedTusks}
			/>
			<TodoList
				data={tasks}
				onDelete={deleteItem}
				onToggleStatus={onToggleStatus}
			/>

			<div class="background">
				<video className="background__video" autoPlay muted loop>
					<source src={video} type="video/mp4"></source>
				</video>
			</div>
		</div>
	);
}

export default App;



// useEffect(() => {
// 	const raw = localStorage.getItem('tasks') || JSON.stringify([])
// 	setTasks(JSON.parse(raw));
// }, [])