"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var schema_1 = __importDefault(require("./schema"));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (userParams, callback) {
        var user = new schema_1.default(userParams);
        user.save(callback);
    };
    UserService.prototype.findUserId = function (query, callback) {
        schema_1.default.findOne(query, callback);
    };
    UserService.prototype.updateUser = function (userParams, callback) {
        var query = { _id: userParams._id };
        schema_1.default.updateOne(query, userParams, callback);
    };
    UserService.prototype.deleteUser = function (_id, callback) {
        var query = { _id: _id };
        schema_1.default.deleteOne(query, callback);
    };
    return UserService;
}());
exports.default = UserService;
1;
