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
        const {taskCounter} =this.props;

        const foundTasks = (taskCounter > 0) ? <div className="todo__notask">Tasks: {taskCounter}</div> : <div className="todo__notask">No task found</div>;

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
                {foundTasks}
            </div>
        )
    }
}

export default TodoForm;