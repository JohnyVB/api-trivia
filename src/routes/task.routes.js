const { Router } = require('express');

// Controllers
const TaskCtrl = require('../controllers/task.controller');

const router = Router();

router.get('/', TaskCtrl.findAllTasks);

router.post('/', TaskCtrl.createTask);

router.get('/done', TaskCtrl.findAllDoneTasks);

router.get('/:id', TaskCtrl.findOneTask);

router.delete('/:id', TaskCtrl.deleteTask);

router.put('/:id', TaskCtrl.updateTask);

module.exports = router;
