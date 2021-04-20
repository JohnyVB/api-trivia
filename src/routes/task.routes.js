import { Router } from 'express';
// Controllers
import * as TaskCtrl from '../controllers/task.controller';

const router = Router();

router.get('/', TaskCtrl.findAllTasks);

router.post('/', TaskCtrl.createtask);

router.get('/done', TaskCtrl.findAllDoneTasks);

router.get('/:id', TaskCtrl.findOneTask);

router.delete('/:id', TaskCtrl.deleteTask);

router.put('/:id', TaskCtrl.updateTask);

export default router;
