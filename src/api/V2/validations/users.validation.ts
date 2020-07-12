
import Joi from '@hapi/joi';
/**
 * @Schema UserSchema
 * creating a user validated schema by 
 * @Joi API
 */
/**
 * @author Pacifique Linjanja
 * @constants to be exported
 */
const valideUsername = Joi.string().min(4).alphanum().max(20).required()
const validePassword = Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/)
const phoneRegexp = new RegExp(
  '\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|' +
    '2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|' +
    '4[987654310]|3[9643210]|2[70]|7|1)\\d{1,14}$',
);
const adressRegex = new RegExp(
    ''
)
const validMail = Joi.string().email({ minDomainSegments : 2, tlds : { allow : ['.com', '.org', '.net', '.cd']}})
const stringField = Joi.string().min(5).max(120).optional()

export const loginValidation = Joi.object().keys({
    phone : phoneRegexp,
    password : validePassword
})

export const signupValidation = Joi.object().keys({
    username : valideUsername,
    password : validePassword,
    mail : validMail,
    adress : Joi.string().regex(adressRegex).required(),
    photo : stringField,
    accountType : Joi.string().trim(),
    signedOn : Joi.date()
})
