import * as express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import getLogger from './logger/Logger';
import RequestLogger from './middleware/RequestLogger';
import router from './routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
createConnection().then(async connection => {
  const app = express();

  app.use(RequestLogger.config());
  app.use('/v1/movies', router);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    const logger = getLogger();
    logger.info(`Server is running in http://localhost:${PORT}`);
  });
});
