"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Logger
 * To displays custom loggers instand of @console.log
 */
var winston = __importStar(require("winston"));
var Logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
});
exports.default = Logger;
