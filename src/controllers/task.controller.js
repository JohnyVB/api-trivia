// Middlewares
import asyncHandler from '../middleware/asyncHandler';

// Models
import Task from '../models/Task';

// Pagination
import { getPagination } from '../libs/getPagination';

export const findAllTasks = asyncHandler(async (req, res) => {
  const { size, page, title } = req.query;

  const condition = title
    ? {
        title: { $regex: new RegExp(title), $options: 'i' }
      }
    : {};

  const { limit, offset } = getPagination(page, size);

  const tasks = await Task.paginate(condition, { offset, limit });
  res.json(tasks);
});

export const createtask = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: 'Content cannot be empty' });
  }

  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done || false
  });

  const taskSaved = await newTask.save();
  console.log(taskSaved);
  res.json('New task created');
});

export const findOneTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task)
    return res
      .status(404)
      .json({ message: `Task with id ${id} does not exists` });

  res.json(task);
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({
    message: 'Task were deleted successfully'
  });
});

export const findAllDoneTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.json({
    message: 'Task was updated Successfully'
  });
});
