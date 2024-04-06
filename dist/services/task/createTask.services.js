"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const task_model_1 = __importDefault(require("../../models/task.model"));
const createTask = async (taskData) => {
    return await task_model_1.default.create(taskData);
};
exports.createTask = createTask;
