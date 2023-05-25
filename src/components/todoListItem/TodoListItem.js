import { Component } from "react";
import accept from '../../resources/accept.png';

import './todoListItem.scss';

class TodoListItem extends Component {
    state = {
        progress: false,
    }

    changeStatus = () => {
        this.setState({
            progress: (!this.state.progress)
        })
    }

    render() {
        const {name, onDelete} = this.props;
        const status = this.state.progress ? 'task__status green' : 'task__status';

        return(
            <li className="task">
                <div className="task__item">
                    <div className={status}></div>
                    <div className="task__name">{name}</div>
                    <div className="task__accept" onClick={this.changeStatus}>
                        <img src={accept} alt="accept"></img>
                    </div>
                    <button onClick={onDelete} className="task__delete">Delete</button>
                </div>
            </li>
        )
    }
}

export default TodoListItem;