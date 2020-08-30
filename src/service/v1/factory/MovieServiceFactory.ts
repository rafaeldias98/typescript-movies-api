import { getManager } from 'typeorm';
import MovieService from '../MovieService';
import { Movie } from '../../../entity/Movie';
import getLogger from '../../../logger/Logger';

export default class MovieServiceFactory {
  static make(): MovieService {
    return new MovieService(getManager().getRepository(Movie), getLogger());
  }
}
