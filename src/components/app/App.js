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

	render() {
		return (
			<div className="app">
				<TodoForm taskCounter={this.state.taskCounter} onAdd={this.addItem} />
				<TodoList data={this.state.tasks} onDelete ={this.deleteItem}/>

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
