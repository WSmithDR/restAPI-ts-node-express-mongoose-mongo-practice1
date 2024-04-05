"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_model_1 = __importDefault(require("../../models/task.model"));
// Route to create a new task
const addTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        // Validate request parameters
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        // Create a new task instance
        const newTask = new task_model_1.default({
            title,
            description,
        });
        // Save the task to the database
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.default = addTask;
