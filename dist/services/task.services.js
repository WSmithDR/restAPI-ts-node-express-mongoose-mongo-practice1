"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByTitle = exports.getTaskById = exports.getAllTasks = exports.createTask = void 0;
const task_model_1 = __importDefault(require("../models/task.model"));
const createTask = async (taskData) => {
    return await task_model_1.default.create(taskData);
};
exports.createTask = createTask;
const getAllTasks = async (page = 1, limit = 10) => {
    const total = await task_model_1.default.countDocuments();
    const tasks = await task_model_1.default.find()
        .skip((page - 1) * limit)
        .limit(limit);
    return { tasks, total };
};
exports.getAllTasks = getAllTasks;
const getTaskById = async (taskId) => {
    return await task_model_1.default.findById(taskId);
};
exports.getTaskById = getTaskById;
const getTasksByTitle = async (title) => {
    return await task_model_1.default.find({ title });
};
exports.getTasksByTitle = getTasksByTitle;
