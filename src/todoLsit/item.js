import React from 'react';

export default class Item extends React.Component {
    toggleDo = () => {
        this.props.toggleDo(this.props.ID);
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.ID);
    }

    render() {
        let task = this.props.task;
        let itemChecked;
        if (this.props.isDone === "true") {
            task = <del>{task}</del>;
            itemChecked = true;
        } else if (this.props.isDone === "false") {
            itemChecked = false;
        }

        return (<li>
            <div className="item">
                <input type="checkbox" checked={itemChecked} onChange={this.toggleDo} />
                <span>{task}</span>
                <button onClick={this.deleteItem}>删除</button>
            </div>
        </li>);
    }
}