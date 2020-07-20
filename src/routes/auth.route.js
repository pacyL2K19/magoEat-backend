"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = require("../controllers/auth.controller");
var route = function (router) {
    router.route('/signup')
        .post(auth_controller_1.signup);
    router.route('/login')
        .post(auth_controller_1.login);
};
exports.default = route;
