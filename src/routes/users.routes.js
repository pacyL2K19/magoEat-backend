"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_controller_1 = require("./../controllers/users.controller");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.userController = new users_controller_1.UserController();
    }
    UserRoutes.prototype.route = function (app) {
        var _this = this;
        app.post('api/v2/login', function (req, res) {
            _this.userController.login(req, res);
        });
        app.post('api/vs/signup', function (req, res) {
            _this.userController.signup(req, res);
        });
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
