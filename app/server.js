const express = require('express');
const db = require('./db');
const TODO = require('./crud');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());
app.get('/',function(req,res){
	console.log("---------")
	// let f = fs.readFile('./index.html',(err,data) => {
	// 	if (err) throw err;
	// 	console.log(data);
	// 	res.send(data);
	// });
});

app.post('/api/todo/',function(req,res){
	console.log(req.body);
	if(req.body.data){
		TODO.createToDo(req.body.data,res);
		//todo_arr.push({todo:req.body.data,id:id++});	
	}
	//res.json({data:todo_arr});

});
app.delete('/api/todo/:id',function(req,res){
	TODO.deleteToDo(req.params.id,res);
});
app.put('/api/todo/:id',function(req,res){
	TODO.updateToDo(req.params.id,req.body.data,res);
	console.log('----');
});
app.get('/api/todo/',function(req,res){
	TODO.AllDataSender(res);
});

module.exports = app;
