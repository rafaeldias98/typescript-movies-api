import * as express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as httpLogger from 'express-pino-logger';
import getLogger from './logger/Logger';
import router from './routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
createConnection().then(async connection => {
  const logger = getLogger();
  const app = express();

  app.use(httpLogger({ logger }));
  app.use('/v1/movies', router);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`Server is running in http://localhost:${PORT}`);
  });
});
