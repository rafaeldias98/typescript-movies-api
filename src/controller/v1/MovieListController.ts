import { Request, Response } from 'express';
import { ValidationError } from 'joi';
import MovieServiceFactory from '../../service/v1/factory/MovieServiceFactory';

/**
 * @api {get} /v1/movies/ Request all Movies
 * @apiVersion 0.0.1
 * @apiName GetAllMovies
 * @apiGroup Movies
 *
 * @apiParam (QueryParams) {String="releaseDate"} order_by Field of movies will be ordered.
 * @apiParam (QueryParams) {String="DESC","ASC"} order_type Type of movies order.
 *
 * @apiSuccess {Number} id Movie identifier.
 * @apiSuccess {String} name Movie name.
 * @apiSuccess {String} description Movie description.
 * @apiSuccess {String} status Movie status.
 * @apiSuccess {String} releaseDate Release date of movie.
 * @apiSuccess {String} authorName Name of author of the movie.
 * @apiSuccess {String} createdAt Movie creation date.
 * @apiSuccess {String} updatedAt Movie update date.
 *
 * @apiError (ValidationError) {String} error 400 Bad Request.
 * @apiErrorExample {json} ValidationError example:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "'order_type' must be one of [ASC, DESC]"
 *     }
 */
export default async function getAllAction(
  request: Request,
  response: Response,
): Promise<void> {
  try {
    const movieService = MovieServiceFactory.make();

    const movies = await movieService.getAll(request);

    response.send(movies);
  } catch (error) {
    let status = 500;

    if (error instanceof ValidationError) {
      status = 400;
    }

    response.status(status);
    response.send({ error: error.message });
  }
}
