"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("@hapi/joi"));
/**
 * @Schema UserSchema
 * creating a user validated schema by
 * @Joi API
 */
/**
 * @author Pacifique Linjanja
 * @constants to be exported
 */
var valideUsername = joi_1.default.string().min(4).alphanum().max(20).required();
var validePassword = joi_1.default.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/);
var phoneRegexp = new RegExp('\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|' +
    '2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|' +
    '4[987654310]|3[9643210]|2[70]|7|1)\\d{1,14}$');
var adressRegex = new RegExp('');
var validMail = joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['.com', '.org', '.net', '.cd'] } });
var stringField = joi_1.default.string().min(5).max(120).optional();
exports.loginValidation = joi_1.default.object().keys({
    phone: phoneRegexp,
    password: validePassword
});
exports.signupValidation = joi_1.default.object().keys({
    username: valideUsername,
    password: validePassword,
    mail: validMail,
    adress: joi_1.default.string().regex(adressRegex).required(),
    photo: stringField,
    accountType: joi_1.default.string().trim(),
    signedOn: joi_1.default.date()
});
