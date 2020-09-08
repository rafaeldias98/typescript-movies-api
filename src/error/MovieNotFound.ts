import DomainError from './DomainError';

class MovieNotFoundError extends DomainError {
  constructor(movieId: number) {
    super(`Movie ${movieId} was not found.`, 404);
  }
}

export default MovieNotFoundError;
