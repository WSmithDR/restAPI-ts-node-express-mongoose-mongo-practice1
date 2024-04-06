"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasksController = void 0;
const getByTitle_service_1 = require("../../services/task/getByTitle.service");
const getAllTasksController = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const { tasks, total } = await (0, getByTitle_service_1.getAllTasks)(page, limit);
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
