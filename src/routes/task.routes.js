const { Router } = require('express');

// Controllers
const TaskCtrl = require('../controllers/task.controller');

const router = Router();

router.get('/', TaskCtrl.findAllTasks).post('/', TaskCtrl.createTask);

router
  .get('/:id', TaskCtrl.findOneTask)
  .put('/:id', TaskCtrl.updateTask)
  .delete('/:id', TaskCtrl.deleteTask);

router.get('/done', TaskCtrl.findAllDoneTasks);

module.exports = router;
