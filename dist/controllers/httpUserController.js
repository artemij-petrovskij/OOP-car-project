"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpUserController = void 0;
const express_1 = __importDefault(require("express"));
/////////
const router = express_1.default.Router();
const addUserDto_1 = require("../core/repositories/UserRepository/dto/addUserDto");
class httpUserController {
    constructor(userService) {
        this.userService = userService;
    }
    createNewUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            yield this.userService.createNewUser(new addUserDto_1.addUserDto(email, password));
            return res.status(404);
        });
    }
}
exports.httpUserController = httpUserController;
