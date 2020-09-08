import { Request, Response } from 'express';
import { ValidationError } from 'joi';
import DomainError from '../../error/DomainError';
import MovieServiceFactory from '../../service/v1/factory/MovieServiceFactory';

/**
 * @api {get} /v1/movies/:id Request one Movie by ID
 * @apiVersion 0.0.1
 * @apiName GetById
 * @apiGroup Movie Detail
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
 * @apiError (MovieNotFoundError) {String} error 404 Not Found.
 * @apiErrorExample {json} MovieNotFoundError example:
 *     // HTTP 404 Not Found
 *     {
 *       "error": "Movie 99 was not found."
 *     }
 *
 * @apiError (ValidationError) {String} error 400 Bad Request.
 * @apiErrorExample {json} ValidationError example:
 *     // HTTP 400 Bad Request
 *     {
 *       "error": "'value' must be a number"
 *     }
 */
export default async function getByIdAction(
  request: Request,
  response: Response,
): Promise<void> {
  try {
    const movieService = MovieServiceFactory.make();

    const movie = await movieService.getById(request);

    response.send(movie);
  } catch (error) {
    let status = 500;

    if (error instanceof ValidationError) {
      status = 400;
    }

    if (error instanceof DomainError) {
      status = error.data.status;
    }

    response.status(status);
    response.send({ error: error.message });
  }
}
