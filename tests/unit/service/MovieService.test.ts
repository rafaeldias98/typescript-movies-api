import { Request } from 'express';
import { Mock } from 'ts-mockery';
import { Repository } from 'typeorm';
import { Logger } from 'winston';
import { ValidationError } from 'joi';
import MovieService from '../../../src/service/v1/MovieService';
import { Movie } from '../../../src/entity/Movie';

describe('Movie service', () => {
  describe('getAll method', () => {
    test('should return an array of movies returned by repository', async () => {
      const movieMock1 = new Movie();
      const movieMock2 = new Movie();

      movieMock1.name = 'Unit Test';
      movieMock2.name = 'Unit Test';

      const moviesMock = [movieMock1, movieMock2];

      const repositoryMock = Mock.of<Repository<Movie>>({
        find: jest.fn().mockReturnValue(moviesMock),
      });

      const loggerMock = Mock.of<Logger>({
        info: jest.fn(),
      });

      const requestMock = Mock.of<Request>({
        query: {},
      });

      const service = new MovieService(repositoryMock, loggerMock);

      expect(await service.getAll(requestMock)).toEqual(moviesMock);
      expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    });
  });

  describe('getOrderingByQueryParams method', () => {
    test('should return an empty object when no queryParams is passed', async () => {
      const repositoryMock = Mock.of<Repository<Movie>>({
        find: jest.fn().mockReturnValue([]),
      });

      const loggerMock = Mock.of<Logger>({
        info: jest.fn(),
      });

      const service = new MovieService(repositoryMock, loggerMock);

      expect(await service.getOrderingByQueryParams({})).toEqual({});
    });

    test('should return an order options object when valid queryParams is passed', async () => {
      const repositoryMock = Mock.of<Repository<Movie>>({
        find: jest.fn().mockReturnValue([]),
      });

      const loggerMock = Mock.of<Logger>({
        info: jest.fn(),
      });

      const queryParamsMock = {
        order_by: 'releaseDate',
        order_type: 'ASC',
      };

      const service = new MovieService(repositoryMock, loggerMock);

      expect(await service.getOrderingByQueryParams(queryParamsMock)).toEqual({
        releaseDate: 'ASC',
      });
      expect(loggerMock.info).toHaveBeenCalledTimes(1);
    });

    test('should throw a ValidationException when invalid queryParams is passed', async () => {
      const repositoryMock = Mock.of<Repository<Movie>>({
        find: jest.fn().mockReturnValue([]),
      });

      const loggerMock = Mock.of<Logger>({
        info: jest.fn(),
      });

      const queryParamsMock = {
        order_by: 'Unit',
        order_type: 'Test',
      };

      const service = new MovieService(repositoryMock, loggerMock);

      await expect(async () => {
        await service.getOrderingByQueryParams(queryParamsMock);
      }).rejects.toEqual(
        new ValidationError('"order_by" must be [releaseDate]', {}, {}),
      );
    });
  });
});
