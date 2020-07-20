"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var connections = __importStar(require("../configs/db"));
var mongoose_1 = require("mongoose");
;
/**
 * @Schema Schema
 * @UserSchema
 */
var UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true,
    }
});
exports.default = connections.db.model('User', UserSchema);
