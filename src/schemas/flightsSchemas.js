import Joi from "joi";

export const fligthSchema = Joi.object({
  origin: Joi.number().required(),
  destination: Joi.number().required(),
  date: Joi.string().pattern(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d{2}/).required()
})