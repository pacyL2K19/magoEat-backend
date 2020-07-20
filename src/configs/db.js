"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var dotenv = __importStar(require("dotenv"));
var Logger_1 = __importDefault(require("../utils/Logger"));
dotenv.config();
exports.db = mongoose.createConnection(process.env.DATABASE_URL, {
    // connection options
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.db.on('connecting', function () {
    Logger_1.default.info('Connecting to MongoDb');
});
exports.db.on('connected', function () {
    Logger_1.default.info('Connected');
});
exports.db.on('error', function () {
    Logger_1.default.error('Failed to connect');
    mongoose.disconnect();
});
