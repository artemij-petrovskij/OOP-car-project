"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./dist/database/db.sqlite ",
});
const UserModel = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
UserModel.sync();
exports.default = UserModel;
