"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = __importStar(require("@hapi/joi"));
var validRestaurantName = Joi.string().min(3).max(25).required();
var stringField = Joi.string().min(3).max(120);
var averageRating = Joi.number().required();
exports.restauValidation = Joi.object().keys({
    label: validRestaurantName,
    picture: stringField,
    averageRating: averageRating,
    adress: stringField,
    description: stringField
});
