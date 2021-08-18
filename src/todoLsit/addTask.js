import React from 'react';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.txtRef = React.createRef();
    }
    saveNewItem = () => {
        if (!this.txtRef.current.value) {
            alert('任务不能为空');
        } else {
            this.props.saveNewItem(this.txtRef.current.value);
            this.txtRef.current.value = '';
        }
    };

    render() {
        return (
            <div className="add_task">
                <input type="text" ref={this.txtRef} placeholder='吃饭睡觉打豆豆~' name='addTask' />
                <button onClick={this.saveNewItem}>保存</button>
            </div>);
    }
}