// Middlewares
const asyncHandler = require('../middleware/asyncHandler');

// Models
const Task = require('../models/Task');

// Pagination
const { getPagination } = require('../libs/getPagination');

const findAllTasks = asyncHandler(async (req, res) => {
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

const createTask = asyncHandler(async (req, res) => {
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

const findOneTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  if (!task)
    return res
      .status(404)
      .json({ message: `Task with id ${id} does not exists` });

  res.json(task);
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.json({
    message: 'Task were deleted successfully'
  });
});

const findAllDoneTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
});

const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.json({
    message: 'Task was updated Successfully'
  });
});

module.exports = {
  updateTask,
  findAllDoneTasks,
  deleteTask,
  findOneTask,
  createTask,
  findAllTasks
};
