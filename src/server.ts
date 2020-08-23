import * as express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import RequestLogger from './middleware/request-logger';
import APIRoutes from './routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
createConnection().then(async connection => {
  const app = express();
  const router = express.Router();

  APIRoutes.forEach(route => {
    router[route.method](
      route.path,
      (
        request: express.Request,
        response: express.Response,
        next: express.NextFunction,
      ) => {
        route
          .action(request, response)
          .then(() => next)
          .catch(err => next(err));
      },
    );
  });

  app.use(RequestLogger.config());
  app.use('/v1/movies', router);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running in http://localhost:${PORT}`);
  });
});
