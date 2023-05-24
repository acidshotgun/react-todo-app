import { Component } from "react";
import TodoListItem from "../todoListItem/TodoListItem";

import './todoList.scss';

class TodoList extends Component {
    
    render() {
        const {data} = this.props;

        const elements = data.map(item => {
            const {id, ...itemProps} = item;

            return(
                <TodoListItem 
                    key={id}
                    {...itemProps}
                />
            )
        })

        return(
           <div className="list">
                {elements}
           </div> 
        )
    }
}

export default TodoList;