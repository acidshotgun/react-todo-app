import { Component } from "react";
import TodoListItem from "../todoListItem/TodoListItem";

import './todoList.scss';

class TodoList extends Component {
    
    render() {
        const {data, onDelete, onToggleStatus} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;

            return(
                <TodoListItem 
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleStatus={(event) => onToggleStatus(id, event.currentTarget.getAttribute('data-toggle'))}
                />
            )
        })

        return(
           <div className="list">
                <ul className="list__container">
                    {elements}
                </ul> 
           </div>
        )
    }
}

export default TodoList;