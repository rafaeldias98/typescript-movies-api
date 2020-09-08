import * as Joi from 'joi';

const movieIdSchema = Joi.number().integer().positive().min(1).required();

export default movieIdSchema;
