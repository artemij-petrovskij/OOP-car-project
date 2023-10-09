import express from 'express'
import { Request, Response } from 'express';

const router = express.Router()
router.get('/', function (req: Request, res: Response) {
    res.send('GET request to the homepage');
})


export default router