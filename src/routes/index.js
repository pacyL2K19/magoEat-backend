"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_route_1 = __importDefault(require("./auth.route"));
var msg_route_1 = __importDefault(require("./msg.route"));
// import ratingRoutes from './rating';
// import restauRoutes from './restau';
// import repasRoutes from './repas';
var router = express_1.Router();
router.use(auth_route_1.default);
router.use(msg_route_1.default);
// router.use(ratingRoutes);
// router.use(restauRoutes);
// router.use(repasRoutes);
exports.default = router;
