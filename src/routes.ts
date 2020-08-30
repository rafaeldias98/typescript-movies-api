import { Router, Request, Response } from 'express';
import getAllAction from './controller/v1/MovieListController';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  return getAllAction(request, response);
});

export default router;
