"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = require("./../controllers/auth.controller");
var route = function (router) {
    router.route('/msg_conf')
        .post(auth_controller_1.sendConfMess);
};
exports.default = route;
