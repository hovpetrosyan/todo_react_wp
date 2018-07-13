import React,{Component} from 'react';
export class TodoItem extends Component{
    state={
        input_val:this.props.todo.todo
    }
    edit = () =>{
        this.props.editTodo({todo:this.state.input_val,_id:this.props.todo._id});
        //console.log('sxhbsjb',this.props.todo._id);
        //console.log('idddd',(document.getElementById(this.props.todo._id)).value);
    }
    del = ()=>{
        this.props.deleteTodo(this.props.todo);
        //console.log(this.props.todo._id);
    }
    handleChange =(event)=>{
        this.setState({input_val:event.target.value});
        //console.log('+-+-+-+-+-+-',event.target.value);
    }
    render(){
        //console.log('inTodo',this.props.todo);
        return(
        <React.Fragment>
            <tr>
            <td><input type='text'  value={this.state.input_val} id = {this.props.todo._id} onChange={this.handleChange}/></td>
            <td><button onClick = {this.edit} >EDIT</button></td>
            <td><button onClick = {this.del}>DELETE</button></td>
            </tr>
        </React.Fragment>);
       
    }
    
} 