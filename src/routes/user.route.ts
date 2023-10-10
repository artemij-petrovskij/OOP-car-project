import express from 'express'
import { Request, Response } from 'express';
import { getName } from '../controller/user.controller'

const router = express.Router()

router.get('/', getName)

router.post('/', function (req: Request, res: Response) {
    // const new_user = new User('Artem')
    // // console.log(req.body.name);
    // res.send(new_user.greeting());
    res.send('123')
})

export default router