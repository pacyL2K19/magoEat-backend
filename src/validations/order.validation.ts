import * as Joi from '@hapi/joi';

const stringField = Joi.string().min(3).max(120)
const validRate = Joi.number().min(1).max(5).optional()
const validRestaurantID = Joi.string().required().alphanum()

export const orderValidation = Joi.object().keys({
    label : stringField,
    restauID : validRestaurantID,
    image : stringField,
    description : stringField,
    averageRate : validRate
})