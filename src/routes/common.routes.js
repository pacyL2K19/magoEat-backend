"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../modules/common/constants");
var CommonRoutes = /** @class */ (function () {
    function CommonRoutes() {
    }
    CommonRoutes.prototype.route = function (app) {
        app.use('*', function (req, res, next) {
            res.status(constants_1.statusCode.unauthorized).send({
                message: "Un probleme avec l'application ?",
                success: false,
                status: 'Dangerous'
            });
        });
    };
    return CommonRoutes;
}());
exports.CommonRoutes = CommonRoutes;
