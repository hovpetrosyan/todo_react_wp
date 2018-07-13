import React,{Component} from 'react';
import ReactDOM from "react-dom";
import {TodoItem} from './components/todoitem';
import {Todo} from './components/todo';
import {sendReq} from './utils/requestUtils';
import '../styles/style.css';
let root = document.getElementById('root');
let url = 'http://localhost:3000/api/todo/';
class App extends Component{
    state={
        todos: []
    }
    url = 'http://localhost:3000/api/todo/';
    sendReq = sendReq;
    deleteTodo = (todo)=>{
        this.sendReq(fetch,'delete',todo.todo,url+todo._id,this);
    }
    addTodo = (todo) => {
        this.sendReq(fetch,'post',todo,url,this);
    }
    editTodo = (todo) => {
        console.log('+++++',todo.todo);
        this.sendReq(fetch,'put',todo.todo,url+todo._id,this)
    }
    componentDidMount(){
        this.sendReq(fetch,'get',{},url,this);
        /*fetch(url,{
            method:'get',
            headers: {
                "Content-Type": "application/json"
            },
        
            }).then((res)=>{
                res.json().then((data)=>{
                    //console.log(data);
                        let arr = data.data;
                        this.setState({todos:arr});
                        console.log('statechanged');
                    //console.log('state',this.state);
                   // document.getElementById('add').value = '';
                });
               // todo
        });*/
    }
    render(){
        return(
            <React.Fragment>
                 <Todo addTodo={this.addTodo}/>
                 <div id='anim'>REACT</div>
                 <table>
                     <tbody>
                {this.state.todos.map(
                    (todo) => 
                    {
                        //console.log('todoid',todo._id);
                        //console.log('todotodo',todo.todo);
                        return <TodoItem key = {todo._id} todo = {todo}  deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
                    })
                } 
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />,root);