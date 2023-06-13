import { Component } from "react";
import nextId from "react-id-generator";

// components
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import './app.scss';

class App extends Component {
	state = {
		tasks: [],
		taskCounter: 0,
	}

	addItem = (newTask) => {
		this.setState(({tasks, taskCounter}) => {
			return {
				tasks: [...tasks, {name: newTask, status: false, id: nextId()}],
				taskCounter: taskCounter + 1,
			}
		})
	}

	deleteItem = (id) => {
		this.setState(({tasks, taskCounter}) => {
			return {
				tasks: tasks.filter(item => item.id !== id),
				taskCounter: taskCounter - 1,
			}
		})
	}

	// Метод заменяет св-во status в state у определенного элемента по id
	// Синтаксис [prop] позваляет вытащить зн-е из data-атрибута который передается
	// data-атрибут стоит у item
	onToggleStatus = (id, prop) => {
		this.setState(({tasks}) => ({
			tasks: tasks.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}

				return item;
			})
		}))
	}

	render() {
		// В переменную записывается число - это длина массива где записаны только ообъекты у которых status = true
		const completedTusks = this.state.tasks.filter(item => item.status).length;

		return (
			<div className="app">
				<TodoForm 
					taskCounter={this.state.taskCounter} 
					onAdd={this.addItem} 
					completedTusks={completedTusks}
				/>
				<TodoList 
					data={this.state.tasks} 
					onDelete={this.deleteItem}
					onToggleStatus={this.onToggleStatus}
					getComplitedTusks={this.getComplitedTusks}
				/>

				<div class="background">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		);
	}
}

export default App;
