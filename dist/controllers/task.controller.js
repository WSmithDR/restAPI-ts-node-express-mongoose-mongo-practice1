"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByTitleController = exports.getTaskByIdController = exports.getAllTasksController = exports.createTaskController = void 0;
const task_services_1 = require("../services/task.services");
const createTaskController = async (req, res) => {
    try {
        const task = await (0, task_services_1.createTask)(req.body);
        res.status(201).json(task);
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createTaskController = createTaskController;
const getAllTasksController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const { tasks, total } = await (0, task_services_1.getAllTasks)(page, limit);
        res.status(200).json({
            tasks,
            totalPages: Math.ceil(total / limit),
            currentPage: page
        });
    }
    catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllTasksController = getAllTasksController;
const getTaskByIdController = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await (0, task_services_1.getTaskById)(taskId);
        if (!task) {
            res.status(404).json({ message: 'Task not found' });
        }
        else {
            res.status(200).json(task);
        }
    }
    catch (error) {
        console.error('Error fetching task by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getTaskByIdController = getTaskByIdController;
const getTasksByTitleController = async (req, res) => {
    try {
        const title = req.query.title;
        const tasks = await (0, task_services_1.getTasksByTitle)(title);
        res.status(200).json(tasks);
    }
    catch (error) {
        console.error('Error fetching tasks by title:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getTasksByTitleController = getTasksByTitleController;
