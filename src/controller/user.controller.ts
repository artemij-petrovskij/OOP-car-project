import { Request, Response } from 'express';
import { User } from '../modules/user.module'

const saveUser = async (req: Request, res: Response): Promise<any> => {

    const newUser = new User(req.body.name, req.body.password)

    newUser.saveUser()

    res.send(newUser.greeting())

}

const getUsers = async (req: Request, res: Response): Promise<any> => {
    
    const allUsers = new User('0','0')
    const us = await allUsers.getAllUsers()
    console.log(us)
    
    res.json(us)

}



export { saveUser, getUsers} 