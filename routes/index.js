var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos')

/* GET home page. */
router.get('/', todosCtrl.index);
router.post('/todos', todosCtrl.create);

router.delete('/delete', todosCtrl.deleteTodo)

module.exports = router;
