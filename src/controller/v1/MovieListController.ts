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
 * @apiSuccess {Object[]} movies List of movie entities.
 * @apiSuccess {Number} movies.id Movie identifier.
 * @apiSuccess {String} movies.name Movie name.
 * @apiSuccess {String} movies.description Movie description.
 * @apiSuccess {String} movies.status Movie status.
 * @apiSuccess {String} movies.releaseDate Release date of movie.
 * @apiSuccess {String} movies.authorName Name of author of the movie.
 * @apiSuccess {String} movies.createdAt Movie creation date.
 * @apiSuccess {String} movies.updatedAt Movie update date.
 *
 * @apiError (ValidationError) {String} error 400 Bad Request.
 * @apiErrorExample {json} ValidationError example:
 *     // HTTP 400 Bad Request
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
