import { Request, Response } from 'express';
import MovieServiceFactory from '../../service/factory/MovieServiceFactory';

export default async function getAllAction(
  request: Request,
  response: Response,
): Promise<void> {
  const movieService = MovieServiceFactory.make();

  const movies = await movieService.getAll();

  response.send(movies);
}
