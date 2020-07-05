
import Joi from '@hapi/joi';
/**
 * @Schema UserSchema
 * creating a user validated schema by 
 * @Joi API
 */

const userSchemaValidator : Joi.ObjectSchema = Joi.object().keys({
    username : Joi.string()
        .min(4)
        .alphanum()
        .max(20)
        .required(),
    password : Joi.string()
        .required()
        .alphanum(),
    email : Joi.string()
        .email({ minDomainSegments : 2, tlds : { allow : ['.com', '.net', '.org']}})
        .required(),
    adress : Joi.string()
        .alphanum()
        .trim()
        .lowercase()
        .pattern(new RegExp ('')),
    telephone : Joi.number()
        .max(13)
        .min(9)
})

export default userSchemaValidator;