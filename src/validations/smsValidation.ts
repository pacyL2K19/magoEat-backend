import Joi from '@hapi/joi';

const textFormat = Joi.string().min(10).max(160);
// const headerMessages = Joi.op