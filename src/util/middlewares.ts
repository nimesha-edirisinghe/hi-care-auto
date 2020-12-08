import express, { Response, NextFunction, Request } from 'express';
import cors from 'cors';
import createError, { HttpError } from 'http-errors';
import { StructError } from 'superstruct';
import { MESSAGES, ERROR_STATUS_CODES } from './constants';
import logger from './logger';

/** Include CORS configurations within this middleware */
export const setCors = (app: express.Application): void => {
  app.use(cors());
};

/** All unhandled requests will hit this middleware and will be considered as a 404 error. */
export const pageNotFoundHandler = (req: Request, res: Response): void => {
  logger.error({
    path: req.path,
    message: MESSAGES.NOT_FOUND,
  });

  res.status(ERROR_STATUS_CODES.NOT_FOUND).send({
    message: MESSAGES.NOT_FOUND,
  });
};

/** Handle validation errors and entity not found exception thrown by ORM */
export const badRequestHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err instanceof StructError ) {
    res.status(ERROR_STATUS_CODES.BAD_REQUEST).send({
      message: err.message,
    });
  } else {
    next(err);
  }
};

/** All unhandled exceptions will be logged and returned to the user with relevant status code or as an internal server error */
export const exceptionHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  logger.error({
    path: req.path,
    message: err.message,
    headers: req.headers,
    params: req.params,
    body: req.body,
    err,
  });

  res.status(err.statusCode || ERROR_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
    message:
      (err.response && err.response.data && err.response.data.errorMessage) ||
      err.message,
    errors: err.errors,
  });
};

