import { Component } from "react";
import accept from '../../resources/accept.png';

import './todoListItem.scss';

class TodoListItem extends Component {
    render() {
        const {name} = this.props;

        return(
            <div className="task">
                <div className="task__item">
                    <div className="task__status"></div>
                    <div className="task__name">{name}</div>
                    <div className="task__accept">
                        <img src={accept} alt="accept"></img>
                    </div>
                    <button className="task__delete">Delete</button>
                </div>
            </div>
        )
    }
}

export default TodoListItem;