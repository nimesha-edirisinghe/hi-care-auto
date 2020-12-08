import { Router, Request, Response, NextFunction } from 'express';

const userController = Router();

userController.delete(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      
    } catch (error) {
      next(error);
    }
  },
);


export default userController;
