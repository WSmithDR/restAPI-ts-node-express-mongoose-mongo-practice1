"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = require("../controllers/task.controller");
const router = express_1.default.Router();
router.post('/', task_controller_1.createTaskController);
router.get('/', task_controller_1.getAllTasksController);
router.get('/:id', task_controller_1.getTaskByIdController);
router.get('/search', task_controller_1.getTasksByTitleController);
exports.default = router;
