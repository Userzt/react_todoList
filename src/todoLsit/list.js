import React from 'react';
import Item from './item';


export default class List extends React.Component {

    render() {
        let taskList = this.props.data.map(item =>
            <Item
                key={item.id}
                ID={item.id}
                task={item.task}
                isDone={item.isDone}
                toggleDo={this.props.toggleDo}
                deleteItem={this.props.deleteItem}
            />
        )
        return (
            <div className="list">
                <ul>{taskList}</ul>
            </div>
        );
    }
}