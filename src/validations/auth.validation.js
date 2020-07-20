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
var userSchema = joi_1.default.object().keys({
    username: joi_1.default.string()
        .min(4)
        .alphanum()
        .max(20)
        .required(),
    password: joi_1.default.string()
        .required()
        .alphanum(),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['.com', '.net', '.org'] } })
        .required(),
    adress: joi_1.default.string()
        .alphanum()
        .trim()
        .lowercase()
        .pattern(new RegExp('')),
    telephone: joi_1.default.number()
        .max(10)
        .min(9)
});
exports.default = userSchema;
