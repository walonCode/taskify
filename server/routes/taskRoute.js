import express from 'express';
import { deleteTask,updateTask,getAllTask,getTask,createTask } from '../controllers/taskController.js';

const taskRouter = express.Router()
taskRouter.route('/').post(createTask)
taskRouter.route('/:id').delete(deleteTask)
taskRouter.route('/:id').patch(updateTask)
taskRouter.route('/').get(getAllTask)
taskRouter.route('/:title').get(getTask)


export default taskRouter
