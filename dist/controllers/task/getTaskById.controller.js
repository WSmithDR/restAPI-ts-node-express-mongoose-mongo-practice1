"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskByIdController = void 0;
const services_1 = require("../../services");
const getTaskByIdController = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await (0, services_1.getTaskById)(taskId);
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
