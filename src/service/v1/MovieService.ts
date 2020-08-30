import { Request } from 'express';
import { Repository } from 'typeorm';
import { Logger } from 'winston';
import { Movie } from '../../entity/Movie';
import getAllMoviesQueryParamsSchema from '../../schemas/getAllMoviesQueryParams';

export default class MovieService {
  constructor(private repository: Repository<Movie>, private logger: Logger) {
    this.repository = repository;
    this.logger = logger;
  }

  async getAll(request: Request): Promise<Movie[]> {
    const order = await this.getOrderingByQueryParams(request.query);

    return this.repository.find({ order });
  }

  async getOrderingByQueryParams(queryParams: unknown): Promise<unknown> {
    const order = {};

    if (Object.keys(queryParams).length > 0) {
      const validatedQueryParams = await getAllMoviesQueryParamsSchema.validateAsync(
        queryParams,
      );

      this.logger.info(`Ordering movies by ${validatedQueryParams.order_by}`);

      order[validatedQueryParams.order_by] = validatedQueryParams.order_type;
    }

    return order;
  }
}
