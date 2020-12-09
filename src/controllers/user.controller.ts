import { Router, Request, Response, NextFunction } from 'express';

const userController = Router();

userController.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send({
          message: 'Hi'
      })
    } catch (error) {
      next(error);
    }
  },
);


export default userController;
