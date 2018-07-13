import React,{Component} from 'react';
const ENTER_CODE = 13;

export class Todo extends Component{
   state = {
       todo:''
   }
   constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
    createToDo(data){
        fetch('http://localhost:3000/api/todo',{
            method:'post',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({data:data})
            }.then(
                console.log('OK')));
    }
    keyPressedHandler = e => {
        if (e.keyCode === ENTER_CODE) {
            this.props.addTodo(this.state.todo);
            if(this.myRef.current){
                this.myRef.current.focus();
                this.myRef.current.value = '';
            }
        }
    };
    handleChange = (event) =>{
        this.setState({todo:event.target.value});
    } 

    render(){
        if(this.myRef.current){
            this.myRef.current.focus();
            console.log(this.myRef.current,'ecjhvc');
        }
        return(
        <React.Fragment>
            <input id='add' onKeyDown={this.keyPressedHandler} onChange={this.handleChange} ref={this.myRef}/>
            <button onClick={this.props.addTodo}>ADD</button>
        </React.Fragment>);
    }
} 