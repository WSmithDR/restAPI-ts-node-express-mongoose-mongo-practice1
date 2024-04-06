"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = void 0;
const task_model_1 = __importDefault(require("../../models/task.model"));
const getTaskById = async (taskId) => {
    return await task_model_1.default.findById(taskId);
};
exports.getTaskById = getTaskById;
