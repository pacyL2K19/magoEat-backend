import * as Joi from '@hapi/joi'
import { stringify } from 'querystring'

const validRestaurantName = Joi.string().min(3).max(25).required()
const stringField = Joi.string().min(3).max(120)
const averageRating = Joi.number().required()

export const restauValidation = Joi.object().keys({
    label : validRestaurantName,
    picture : stringField,
    averageRating,
    adress : stringField,
    description : stringField
})