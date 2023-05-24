import { Component } from "react";
import nextId from "react-id-generator";

// components
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";
import './app.scss';

class App extends Component {
	state = {
		tasks: []
	}
        
	addItem = (newTask) => {
		this.setState(({tasks}) => {
			return {
				tasks: [...tasks, {name: newTask, status: false, id: nextId()}]
			}
		})
	}

	render() {
		return (
			<div className="app">
				<TodoForm onAdd={this.addItem}/>
				<TodoList data={this.state.tasks}/>
			</div>
		);
	}
}

export default App;
