"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authRoutes = express_1.default.Router();
authRoutes.post('/login', auth_controller_1.loginController);
authRoutes.post('/register', auth_controller_1.registerController);
authRoutes.get('/protected-route', auth_middleware_1.authenticateJwt, (_req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
});
exports.default = authRoutes;
