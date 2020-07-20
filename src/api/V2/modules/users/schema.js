"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
// import { accountType } from '../common/constants'
/**
 * @mongoose
 * @Schema
 * @const userSchema to be exported
 */
var UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    adress: {
        type: String,
    },
    phone: {
        type: String,
    },
    accountType: {
        type: String,
    },
    profilePicture: {
        type: String
    },
    mail: {
        type: String
    },
    signedOn: {
        type: Date
    }
});
exports.default = mongoose_1.default.model('User', UserSchema);
