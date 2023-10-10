"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    greeting() {
        return `Hello, my name is ${this.name}`;
    }
}
exports.User = User;
