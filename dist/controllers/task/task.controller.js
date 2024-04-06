"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = void 0;
const getByTitle_service_1 = require("../../services/task/getByTitle.service");
const createTaskController = async (req, res) => {
    try {
        const task = await (0, getByTitle_service_1.createTask)(req.body);
        res.status(201).json(task);
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createTaskController = createTaskController;
