import express from 'express'
import { httpUserController } from '../controllers/httpUserController'

const router = express.Router()

router.get('/',)

router.post('/', async (req: any, res: any): Promise<any> => {

    res.send('123')

})

export default router    