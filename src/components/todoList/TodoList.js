import { Component } from "react";
import TodoListItem from "../todoListItem/TodoListItem";

import './todoList.scss';

class TodoList extends Component {
    
    render() {
        const {data, onDelete} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;

            return(
                <TodoListItem 
                    key={id}
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                />
            )
        })

        return(
           <ul className="list">
                {elements}
           </ul> 
        )
    }
}

export default TodoList;