import React,{Component} from 'react';
const ENTER_CODE = 13;

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
    keyPressedHandler = e => {
        if (e.keyCode === ENTER_CODE) {
            this.props.addTodo();
            document.getElementById('add').focus();
        }
    };

    render(){
        if(document.getElementById('add')){
            document.getElementById('add').focus();
        }
        return(
        <React.Fragment>
            <input id='add' onKeyDown={this.keyPressedHandler}/>
            <button onClick={this.props.addTodo}>ADD</button>
        </React.Fragment>);
    }
} 