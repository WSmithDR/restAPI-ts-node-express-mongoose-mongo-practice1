"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requireAuth_middleware_1 = require("./middlewares/requireAuth.middleware");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('<h1>Welcome to my REST API!</h1>');
});
app.use('/tasks', requireAuth_middleware_1.authenticateMiddleware, task_routes_1.default);
app.use('/auth', auth_routes_1.default);
exports.default = app;
