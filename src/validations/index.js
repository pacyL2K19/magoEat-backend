"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_validation_1 = require("./order.validation");
var users_validation_1 = require("./users.validation");
var restauvants_validation_1 = require("./restauvants.validation");
var Validator = /** @class */ (function () {
    function Validator() {
        this.loginValidation = users_validation_1.loginValidation;
        this.signupValidation = users_validation_1.signupValidation;
        this.restauValidation = restauvants_validation_1.restauValidation;
        this.repasValidation = order_validation_1.orderValidation;
        // to be updated
    }
    Validator.prototype.getSignup = function () {
        return this.signupValidation;
    };
    Validator.prototype.getLogin = function () {
        return this.loginValidation;
    };
    Validator.prototype.getrRestau = function () {
        return this.restauValidation;
    };
    Validator.prototype.getRepas = function () {
        return this.repasValidation;
    };
    return Validator;
}());
exports.default = new Validator();
