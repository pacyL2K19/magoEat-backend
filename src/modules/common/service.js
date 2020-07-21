"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.successResponse = function (res, message, DATA) {
    res.status(constants_1.statusCode.success).json({
        status: 'success',
        success: true,
        message: message,
        DATA: DATA
    });
};
exports.faillureResponse = function (res, message, DATA) {
    res.status(constants_1.statusCode.bad_request).json({
        status: 'faillure',
        success: false,
        message: message,
        DATA: DATA
    });
};
exports.insufficientParamters = function (res, message, DATA) {
    res.status(constants_1.statusCode.bad_request).json({
        status: 'faillure',
        success: false,
        message: message,
        DATA: DATA
    });
};
exports.mongoError = function (err, res) {
    res.status(constants_1.statusCode.internal_server_error).json({
        status: 'faillure',
        success: false,
        message: 'MongoDB error',
        DATA: err
    });
};
