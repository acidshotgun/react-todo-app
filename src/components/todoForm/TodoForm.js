import { useState } from "react"
import './todoForm.scss'

const TodoForm = ({taskCounter, completedTusks, onAdd}) => {
    
    const [task, setTask] = useState('');

    // Запись будет аналогична [event.target.name]: event.target.value
    const onValueChange = (event) => {
        setTask(event.target.value);
    }
    
    const submitValues = (event) => {
        event.preventDefault();

        if (task) {
            onAdd(task);
            emptyTask();
        }
    }

    const emptyTask = () => {
        setTask('')
    }

    const foundTasks = (taskCounter > 0) ? `Tasks: ${taskCounter}` : 'No task found';
    const complete = (taskCounter > 0) ? `Completed tasks: ${completedTusks}` : null

    return(
        <div className="todo">
            <div className="todo__name">ZHEGULOV TASK</div>
            <form onSubmit={submitValues} className="todo__form">
                <input
                    type="text" 
                    name="task"
                    value={task}
                    placeholder="Add task" 
                    onChange={onValueChange}
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

export default TodoForm;