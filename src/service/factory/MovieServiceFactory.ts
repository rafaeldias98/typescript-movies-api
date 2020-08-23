import { getManager } from 'typeorm';
import MovieService from '../MovieService';
import { Movie } from '../../entity/Movie';

export default class MovieServiceFactory {
  static make(): MovieService {
    return new MovieService(getManager().getRepository(Movie));
  }
}
