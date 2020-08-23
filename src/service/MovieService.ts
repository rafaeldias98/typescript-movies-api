import { Repository } from 'typeorm';
import { Movie } from '../entity/Movie';

export default class MovieService {
  repository: Repository<Movie>;

  constructor(repository: Repository<Movie>) {
    this.repository = repository;
  }

  async getAll(): Promise<Movie[]> {
    return this.repository.find();
  }
}
