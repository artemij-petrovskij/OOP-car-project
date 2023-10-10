import { Request, Response } from 'express';

const getName = async (req: Request, res: Response): Promise<any> => {

    res.json(1123)
}

export {getName}