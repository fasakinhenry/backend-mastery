import type { Request, Response } from 'express';

const Hello = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Hello from the base controller!' });
}

export default Hello;
