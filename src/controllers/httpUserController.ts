import express from 'express'
/////////
const router = express.Router()

/////

import { Request, Response } from 'express';
import { UserService } from "../core/services/UserService/UserService"
import { addUserDto } from "../core/repositories/UserRepository/dto/addUserDto";




export class httpUserController {
    constructor(readonly userService: UserService) { }

    public async createNewUser(req: Request, res: Response) {

        const { email, password } = req.body;
        await this.userService.createNewUser(new addUserDto(email, password))
        return res.status(404)
    }



}

