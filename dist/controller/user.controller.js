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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.saveUser = void 0;
const user_module_1 = require("../modules/user.module");
const saveUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = new user_module_1.User(req.body.name, req.body.password);
    newUser.saveUser();
    res.send(newUser.greeting());
});
exports.saveUser = saveUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = new user_module_1.User('0', '0');
    const us = yield allUsers.getAllUsers();
    console.log(us);
    res.json(us);
});
exports.getUsers = getUsers;
