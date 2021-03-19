
let todos = (require("../data/todos")).todosArr

module.exports = {
    index,
    create,
    deleteTodo,
}

function index(req, res){
    console.log(todos);
    res.render('index', {
    title: "Unit 2 Assessment",
    todos: todos
})
}

function create(req,res){
    req.body.done = false;
    todos.push(req.body);
    res.redirect('/')
}

function deleteTodo (req, res) {
    for (let i = 0; i < todos.length; i++ ){
        if (todos[i].todo == req.body.todo) {
            todos.splice(i, 1)
        }
    }
    res.redirect('/')
}