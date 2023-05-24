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
    
    onSubmitValues = (event) => {
        event.preventDefault();

        this.props.onAdd(this.state.task);
        this.setState({
            task: '',
        })
    }

    render() {
        return(
            <div className="todo">
                <div className="todo__name">ZHEGULOV TASK</div>
                <form onSubmit={this.onSubmitValues} className="todo__form">
                    <input
                        type="text" 
                        name="task"
                        value={this.state.task}
                        placeholder="Add task" 
                        onChange={this.onValueChange}
                    />
                    <button>Add</button>
                </form>
                <div className="todo__notask">No task found</div>
            </div>
        )
    }
}

export default TodoForm;