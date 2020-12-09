import express from 'express';
import { API, V1 } from '../util/constants';
import userController from './user.controller'


/** Initialize base routes for the application along with base route specific middlewares */
export default (app: express.Application): void => {
  app.use(`/${API}/${V1}/user`, userController); // Unauthenticated
};
