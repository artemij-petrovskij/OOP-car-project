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
exports.User = void 0;
const user_module_1 = __importDefault(require("../models/user.module"));
class User {
    constructor(email, password) {
        this.email = '';
        this.password = '';
        this.email = email;
        this.password = password;
    }
    greeting() {
        return `Hello, my email is ${this.email}`;
    }
    saveUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_module_1.default.create({
                email: this.email,
                password: this.password
            });
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield user_module_1.default.findAll();
            return yield allUsers;
        });
    }
}
exports.User = User;
