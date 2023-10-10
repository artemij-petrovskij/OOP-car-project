"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const router = express_1.default.Router();
router.get('/', user_controller_1.getName);
router.post('/', function (req, res) {
    // const new_user = new User('Artem')
    // // console.log(req.body.name);
    // res.send(new_user.greeting());
    res.send('123');
});
exports.default = router;
