"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByTitleController = exports.getTaskByIdController = void 0;
const getByTitle_service_1 = require("../../services/task/getByTitle.service");
const getTaskByIdController = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await (0, getByTitle_service_1.getTaskById)(taskId);
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
        const tasks = await (0, getByTitle_service_1.getTasksByTitle)(title);
        res.status(200).json(tasks);
    }
    catch (error) {
        console.error('Error fetching tasks by title:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getTasksByTitleController = getTasksByTitleController;
