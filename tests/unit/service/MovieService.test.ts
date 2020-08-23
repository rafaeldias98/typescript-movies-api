import { Mock } from 'ts-mockery';
import { Repository } from 'typeorm';
import MovieService from '../../../src/service/MovieService';
import { Movie } from '../../../src/entity/Movie';

describe('Movie service', () => {
  describe('getAll method', () => {
    test('should return an array of movies when method is called', async () => {
      const movieMock = new Movie();
      movieMock.name = 'Unit Test';

      const repositoryMock = Mock.of<Repository<Movie>>({
        find: jest.fn().mockReturnValue([movieMock]),
      });

      const service = new MovieService(repositoryMock);

      expect(await service.getAll()).toEqual([movieMock]);
      expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    });
  });
});
