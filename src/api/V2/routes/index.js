"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_routes_1 = require("./users.routes");
var express_1 = require("express");
var router = express_1.Router();
var userRoutes = new users_routes_1.UserRoutes();
// router.use(userRoutes)
exports.default = router;
