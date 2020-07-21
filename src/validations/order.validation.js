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
var stringField = Joi.string().min(3).max(120);
var validRate = Joi.number().min(1).max(5).optional();
var validRestaurantID = Joi.string().required().alphanum();
exports.orderValidation = Joi.object().keys({
    label: stringField,
    restauID: validRestaurantID,
    description: stringField,
    averageRate: validRate
});
