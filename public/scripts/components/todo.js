import React,{Component} from 'react';

export class Todo extends Component{
   
    createToDo(data){
        fetch('http://localhost:3000/api/todo',{
            method:'post',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({data:data})
            }.then(console.log('OK')));
    }
    render(){
        return(
        <React.Fragment>
            <input id='add'/>
            <button onClick={this.props.addTodo}>ADD</button>
        </React.Fragment>);
    }
} 