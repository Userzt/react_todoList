import React from 'react';
import List from './list'
import AddTask from './addTask';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    task: '做一个todoList Demo',
                    isDone: 'false'
                },
                {
                    id: 2,
                    task: '学习ES6',
                    isDone: 'true'
                },
                {
                    id: 3,
                    task: 'Hello React',
                    isDone: 'true'
                },
                {
                    id: 4,
                    task: '找工作',
                    isDone: 'false'
                },
            ],
        }
    }

    toggleDo = (ID) => {
        let data = this.state.data;
        for (let item of data) {
            if (item.id === ID) {
                item.isDone = item.isDone === "true" ? "false" : "true"
            }
        }
        this.setState({ data });
    };
    deleteItem = (ID) => {
        let data = this.state.data;
        data = data.filter(item => item.id !== ID);
        this.setState({ data })
    };
    saveNewItem = (task) => {
        let newItem = {
            id: this.state.data.length + 1,
            task,
            isDone: "false"
        }
        let data = this.state.data;
        data = data.concat([newItem]);
        this.setState({ data });
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="tit">
                    <h1>TodoList</h1>
                    <List data={this.state.data} toggleDo={this.toggleDo} deleteItem={this.deleteItem} />
                    <div className="total">
                        <p>共有<span className='total_task'>{this.state.data.length}</span>件计划，还有<span className='todo'>{this.state.data.filter(item => item.isDone === 'false').length}</span>件待完成</p>
                    </div>
                    <AddTask saveNewItem={this.saveNewItem} />
                </div>
            </div>
        );
    }
}