import express from 'express'
import { saveUser, getUsers } from '../controller/user.controller'

const router = express.Router()

router.post('/', saveUser) 

router.get('/', getUsers)

export default router   