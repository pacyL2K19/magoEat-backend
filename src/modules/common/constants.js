"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["created"] = 201] = "created";
    statusCode[statusCode["bad_request"] = 400] = "bad_request";
    statusCode[statusCode["internal_server_error"] = 500] = "internal_server_error";
    statusCode[statusCode["unauthorized"] = 401] = "unauthorized";
    statusCode[statusCode["forbiden"] = 404] = "forbiden";
})(statusCode = exports.statusCode || (exports.statusCode = {}));
var accountType;
(function (accountType) {
    accountType["admin"] = "admin";
    accountType["buyer"] = "buyer";
    accountType["restauAdmin"] = "restau_admin";
    accountType["restauOwner"] = "restau_owner";
    accountType["singleSeller"] = "single_seller";
})(accountType = exports.accountType || (exports.accountType = {}));
var devEnvironnement;
(function (devEnvironnement) {
})(devEnvironnement = exports.devEnvironnement || (exports.devEnvironnement = {}));
