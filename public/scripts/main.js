import React,{Component} from 'react';
import ReactDOM from "react-dom";
import {TodoItem} from './components/todoitem';
import {Todo} from './components/todo';

import '../styles/style.css';
let root = document.getElementById('root');
let url = 'http://localhost:3000/api/todo/';
class App extends Component{
    state={
        todos: []
    }
    url = 'http://localhost:3000/api/todo/';
    
    sendReq= (sender,method,data,url)=>{
        sender(url,{
            method:method,
            headers: {
                "Content-Type": "application/json"
            },
             body:JSON.stringify({data:data})
            
            
            }).then((res)=>{
                res.json().then((data)=>{
                    console.log(data);
                    if(method=='post'){
                        console.log(this.state.todos);
                       let arr =  this.state.todos;
                       arr.push(data.data);
                       this.setState({todos:arr})
        
                    }
                    else if(method=='put')
                    {
                        console.log('in edit');
                        let arr = this.state.todos;
                        let item = arr.find((item)=>{return item._id==data.data._id});
                        item.todo = data.data.todo;
                        console.log('--------------------------',data.data.todo);
                       // const newArr = [ arr.slice(0, arr.indexOf(item) - 1), {todo:data.data.todo,_id:data.data._id}, arr.splice(arr.indexOf(item) +1)  ]
                        this.setState({todos:arr});
                    }
                    else if(method=='delete')
                    {
                        console.log('in delete');
                        let arr = this.state.todos;
                        let item = arr.find((item)=>{return item._id==data.data});
                        arr.splice(arr.indexOf(item),1);
                        this.setState({todos:arr});

                    }
                    else if(method == 'get'){
                        let arr = data.data;
                        this.setState({todos:arr});
                    }
                    console.log('state',this.state);
                    document.getElementById('add').value = '';
                });
               // todo
        });
    }
    deleteTodo = (todo)=>{
        this.sendReq(fetch,'delete',todo.todo,url+todo._id);
    }
    addTodo = (todo) => {
        this.sendReq(fetch,'post',document.getElementById('add').value,url);
    }
    editTodo = (todo) => {
        console.log('+++++',todo.todo);
        this.sendReq(fetch,'put',todo.todo,url+todo._id)
    }
    componentDidMount(){
        fetch(url,{
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
        });
    }
    render(){
        return(
            <React.Fragment>
                 <Todo addTodo={this.addTodo}/>
                 <table>
                {this.state.todos.map(
                    (todo) => 
                    {
                        //console.log('todoid',todo._id);
                        //console.log('todotodo',todo.todo);
                        return <TodoItem key = {todo._id} todo = {todo}  deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
                    })
                } 
                </table>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />,root);