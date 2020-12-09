/* eslint-disable guard-for-in */
import express from 'express';
import setRoutes from './controllers/index.controller';
import { createDbConnection } from './util/helpers';
import {
  setCors,
  badRequestHandler,
  exceptionHandler,
  pageNotFoundHandler,
} from './util/middlewares';
import logger from './util/logger';

/** Created express application attached with middlewares such as cors, routes and exception handlers  */
const app = express();
setCors(app);
setRoutes(app);
app.use(badRequestHandler);
app.use(exceptionHandler);
app.use(pageNotFoundHandler);

/** Start the server on the specified port only if its not a test run */
app.listen(process.env.APP_PORT);
logger.info(`Forecast API listening on port ${process.env.APP_PORT}! ....`);

(async (): Promise<void> => {
await createDbConnection();
})();
export default app;
