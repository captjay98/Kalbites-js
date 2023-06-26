import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  userName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.required(),
  address: Joi.string().required(),
  password: Joi.string().min(8).required(),
  account_type: Joi.string().valid("customer", "admin").required(),
});

export const loginSchema = Joi.object({
  userName: Joi.string().required(),
  password: Joi.string().required(),
});
