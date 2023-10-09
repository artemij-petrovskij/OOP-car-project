"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use('/', user_route_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});