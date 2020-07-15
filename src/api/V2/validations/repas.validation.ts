import * as Joi from '@hapi/joi';

const stringField = Joi.string().min(3).max(120)
const validRate = Joi.number().min(1).max(5).optional()
const validRestaurantID = Joi.string().required().alphanum()

export const repasValidation = Joi.object().keys({
    label : stringField,
    restauID : validRestaurantID,
    description : stringField,
    averageRate : validRate
})