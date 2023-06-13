import { Component } from "react";
import accept from '../../resources/accept.png';

import './todoListItem.scss';

const TodoListItem = (props) => {

    const {name, status, onDelete, onToggleStatus} = props;
    const ready = (status) ? 'task__status green' : 'task__status';

    return(
        <li className="task">
            <div className="task__item">
                <div className={ready}></div>
                <div className="task__name">{name}</div>
                <div 
                    data-toggle="status" 
                    className="task__accept" 
                    onClick={onToggleStatus}>
                        <img src={accept} alt="accept"></img>
                </div>
                <button onClick={() => onDelete()} className="task__delete">Delete</button>
            </div>
        </li>
    )
}

export default TodoListItem;