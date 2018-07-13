export function sendReq(sender,method,data,url,t){
    if(method == 'get'){
        sender(url,{
            method:method,
            headers: {
                "Content-Type": "application/json"
            },
            }).then((res)=>{
                res.json().then((data)=>{
                    console.log(data);
                        let arr = data.data;
                        t.setState({todos:arr});
                    //console.log('state',this.state);
                   // document.getElementById('add').value = '';
                });
               // todo
        });
    }else{

    
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
                    console.log(t.state.todos);
                   let arr =  t.state.todos;
                   arr.push(data.data);
                   t.setState({todos:arr})
    
                }
                else if(method=='put')
                {
                    console.log('in edit');
                    let arr = t.state.todos;
                    let item = arr.find((item)=>{return item._id==data.data._id});
                    item.todo = data.data.todo;
                    console.log('--------------------------',data.data.todo);
                   // const newArr = [ arr.slice(0, arr.indexOf(item) - 1), {todo:data.data.todo,_id:data.data._id}, arr.splice(arr.indexOf(item) +1)  ]
                    t.setState({todos:arr});
                }
                else if(method=='delete')
                {
                    console.log('in delete');
                    let arr = t.state.todos;
                    let item = arr.find((item)=>{return item._id==data.data});
                    arr.splice(arr.indexOf(item),1);
                    t.setState({todos:arr});

                }
                else if(method == 'get'){
                    let arr = data.data;
                    t.setState({todos:arr});
                }
                //console.log('state',this.state);
               // document.getElementById('add').value = '';
            });
           // todo
    });
}
}

