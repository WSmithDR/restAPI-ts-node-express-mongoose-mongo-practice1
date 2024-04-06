"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
const task_model_1 = __importDefault(require("../../models/task.model"));
const getAllTasks = async (page = 1, limit = 10) => {
    const total = await task_model_1.default.countDocuments();
    const tasks = await task_model_1.default.find()
        .skip((page - 1) * limit)
        .limit(limit);
    return { tasks, total };
};
exports.getAllTasks = getAllTasks;
