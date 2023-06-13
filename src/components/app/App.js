import { useState } from "react";
import nextId from "react-id-generator";

// content
import video from '../../resources/kurt.mp4';

// components
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import './app.scss';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [taskCounter, setTaskCounter] = useState(0);

	const addItem = (newTask) => {
		setTasks(tasks => [...tasks, {name: newTask, status: false, id: nextId()}]);
		setTaskCounter(taskCounter =>  taskCounter + 1);
	}

	const deleteItem = (id) => {
		setTasks(tasks => tasks.filter(item => item.id !== id));
		setTaskCounter(taskCounter =>  taskCounter - 1);
	}

	// Метод заменяет св-во status в state у определенного элемента по id
	// Синтаксис [prop] позваляет вытащить зн-е из data-атрибута который передается
	// data-атрибут стоит у item
	const onToggleStatus = (id, prop) => {
		setTasks(tasks => tasks.map(item => {
			if (item.id === id) {
				return {...item, [prop]: !item[prop]}
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