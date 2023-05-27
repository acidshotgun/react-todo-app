import { Component } from "react"
import './todoForm.scss'

class TodoForm extends Component {
    state = {
        task: '',
    }

    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    
    SubmitValues = (event) => {
        event.preventDefault();

        if (this.state.task) {
            this.props.onAdd(this.state.task);
            this.setState({
                task: '',
            })
        }
    }

    render() {
        const {taskCounter, completedTusks} = this.props;
        const foundTasks = (taskCounter > 0) ? `Tasks: ${taskCounter}` : 'No task found';
        const complete = (taskCounter > 0) ? `Completed tasks: ${completedTusks}` : null

        return(
            <div className="todo">
                <div className="todo__name">ZHEGULOV TASK</div>
                <form onSubmit={this.SubmitValues} className="todo__form">
                    <input
                        type="text" 
                        name="task"
                        value={this.state.task}
                        placeholder="Add task" 
                        onChange={this.onValueChange}
                    />
                    <button>Add</button>
                </form>
                <div className="todo__progress">
                    <div className="todo__notask">{foundTasks}</div>
                    <div className="todo__completed">{complete}</div>
                </div>
            </div>
        )
    }
}

export default TodoForm;