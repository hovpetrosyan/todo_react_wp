const todoScheme = require('./model');
const mongoose = require('mongoose');
todoScheme.statics.createToDo = function(todo,res){
	let todo_item = new TODO({
		todo:todo
	});
	todo_item.save().then((product) => {res.json({data:product});console.log('new ToDo saved! ');console.log(product);});
}
todoScheme.statics.AllDataSender = function(res){
	let data = this.find().then((data) => res.json({data:data}));
}
todoScheme.statics.deleteToDo = function(id,res){
	this.deleteOne({_id:id}).then((product) => {res.json({data:id}); });
}
todoScheme.statics.updateToDo =function(id,data,res){
	this.update({_id:id},{$set:{todo:data}}).then((product) => {res.json({data:{todo:data,_id:id}});});
}

const TODO = mongoose.model('Todo',todoScheme);
module.exports = TODO;