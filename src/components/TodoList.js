import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"111",
            list:[]
         };
    }
    addDate=()=>{
        var tempList=this.state.list;
        tempList.push(this.refs.title.value); 
        this.setState({
             list:tempList
        })
    }
    render() {
        return (
            <div>
                {this.state.username};
                <h2></h2>
                <input type="text" ref="title" />
                <button onClick={this.addDate}>增加+</button>
                <hr />
                <ul>
                    {
                        
                        
                    }
                    <li>   <button>删除--</button></li>
                    
                </ul>
            </div>
        );
    }
}

export default TodoList;