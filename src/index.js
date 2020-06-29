"use strict";
exports.__esModule = true;
require("dotenv/config");
var app_1 = require("./app");
var _a = process.env.PORT, PORT = _a === void 0 ? 5000 : _a;
app_1["default"].listen(PORT, function () { return console.log("Server listening on Port " + PORT); });
