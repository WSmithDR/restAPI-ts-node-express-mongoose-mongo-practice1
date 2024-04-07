"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
const task_model_1 = __importDefault(require("../../models/task.model"));
const getAllTasks = async (page, limit) => {
    try {
        const tasks = await task_model_1.default.find({})
            .populate('createdBy') // Poblar la referencia al usuario
            .skip((page - 1) * limit)
            .limit(limit)
            .exec();
        const total = await task_model_1.default.countDocuments();
        return { tasks, total };
    }
    catch (error) {
        throw new Error('Error fetching tasks');
    }
};
exports.getAllTasks = getAllTasks;
