import { Router, Request, Response } from 'express';
import getAllAction from './controller/v1/MovieListController';
import getByIdAction from './controller/v1/MovieDetailController';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return getAllAction(request, response);
});

router.get('/:id', (request: Request, response: Response) => {
  return getByIdAction(request, response);
});

export default router;
