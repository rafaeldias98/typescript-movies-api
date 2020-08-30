import * as Joi from 'joi';

const getAllMoviesQueryParamsSchema = Joi.object({
  order_by: Joi.any().valid('releaseDate').required(),
  order_type: Joi.any().valid('ASC', 'DESC').required(),
});

export default getAllMoviesQueryParamsSchema;
