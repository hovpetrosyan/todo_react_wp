import React,{Component} from 'react';
export class TodoItem extends Component{
    edit = () =>{
        this.props.editTodo({todo:{todo:(document.getElementById(this.props.todo._id)).value}});
        console.log('sxhbsjb',this.props.todo._id);
        console.log('idddd',(document.getElementById(this.props.todo._id)).textContent());
    }
    del = ()=>{
        this.props.deleteTodo(this.props.todo);
        console.log(this.props.todo._id);
    }
    render(){
        console.log('inTodo',this.props.todo);
        return(
        <React.Fragment>
            <tr>
            <td><input defaultValue = {this.props.todo.todo} /></td>
            <td><button onClick = {this.edit} id = {this.props.todo._id}>EDIT</button></td>
            <td><button onClick = {this.del}>DELETE</button></td>
            </tr>
        </React.Fragment>);
       
    }
    
} 