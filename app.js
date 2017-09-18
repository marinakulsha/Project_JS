const express = require('express');
const app = express();
const bodyParcel= require("body-parser")
const todoBase = require("./todos")

app.use(express.static(__dirname + '/public'));
app.use(bodyParcel.urlencoded({ extended: false }));
app.use(bodyParcel.json({type: "application/json"}))

app.get('/api/todos/', function (req, res) {
    console.log('get');
   const todos = todoBase.getTodos()
    res.json(todos);
});

app.post('/api/todos/', function (req, res) {
    const todo = req.body;
    todo.id = todoBase.genId();
    todoBase.addTodo(todo);
    res.json(todo);

});

app.delete('/api/todos/:id', function (req, res) {
    const todoId = req.params.id;
    todoBase.deleteTodo(todoId);
    res.json({message:"Deleted!"})

});

app.put('/api/todos/:id', function (req, res) {
    const todoId = request.params.id;
    const todo = todoBase.changeTodoStatus(todoId);
    res.json(todo);

});
app.listen(3001, function () {
console.log('Example app listening on port 3001!');
});








