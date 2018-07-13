import React,{Component} from 'react';
export class TodoItem extends Component{
    edit = () =>{
        this.props.editTodo({todo:(document.getElementById(this.props.todo._id)).value,_id:this.props.todo._id});
        //console.log('sxhbsjb',this.props.todo._id);
        //console.log('idddd',(document.getElementById(this.props.todo._id)).value);
    }
    del = ()=>{
        this.props.deleteTodo(this.props.todo);
        //console.log(this.props.todo._id);
    }
    render(){
        //console.log('inTodo',this.props.todo);
        return(
        <React.Fragment>
            <tr>
            <td><input type='text' defaultValue = {this.props.todo.todo} id = {this.props.todo._id} /></td>
            <td><button onClick = {this.edit} >EDIT</button></td>
            <td><button onClick = {this.del}>DELETE</button></td>
            </tr>
        </React.Fragment>);
       
    }
    
} 