"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./../modules/common/service");
var constants_1 = require("./../modules/common/constants");
var users_validation_1 = require("./../validations/users.validation");
var schema_1 = __importDefault(require("../modules/users/schema"));
var bcrypt = __importStar(require("bcrypt"));
// import validations from '../validations';
var service_2 = __importDefault(require("../modules/users/service"));
var UserController = /** @class */ (function () {
    function UserController() {
        this.userService = new service_2.default();
    }
    UserController.prototype.login = function (req, res) {
        // first, let validate data : 
        var _a = users_validation_1.loginValidation.validate(req.body), error = _a.error, value = _a.value;
        if (error !== undefined)
            res.status(constants_1.statusCode.bad_request).json({
                success: false,
                message: "Rassurez vous d'avoir bien completer les champs requis dans le format requis",
                status: 'Failled'
            });
        // we have to check if the user exists 
        schema_1.default.findOne({ username: value.username })
            .then(function (user) {
            if (user) {
                res.status(constants_1.statusCode.forbiden).json({
                    success: false,
                    status: 'Faillure',
                    message: "Cet utulisateur n'existe pas, avez-vous deja un compte MagoEat ?"
                });
            }
            bcrypt.compare(req.body.password, value.password)
                .then(function (isSame) {
                if (!isSame) {
                    res.status(constants_1.statusCode.forbiden).json({
                        success: false,
                        status: 'Faillure',
                        message: "Mot de passe incorrect"
                    });
                }
                service_1.successResponse(res, 'Ouverture de session reussie', req.body);
            })
                .catch(function (err) {
                service_1.faillureResponse(res, 'Quwlque chose ne va pas, veuillez reessayer', req.body);
            });
        })
            .catch(function (err) {
            service_1.faillureResponse(res, 'Quwlque chose ne va pas, veuillez reessayer', req.body);
        });
    };
    UserController.prototype.signup = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error, value;
            var _this = this;
            return __generator(this, function (_b) {
                _a = users_validation_1.signupValidation.validate(req.body), error = _a.error, value = _a.value;
                if (error !== undefined) {
                    res.status(constants_1.statusCode.bad_request).json({
                        success: false,
                        message: "Rassurez vous d'avoir rempli "
                    });
                }
                /**
                 * Use bcrypt to hash password
                 */
                bcrypt.hash(value.password, process.env.GEN_SALT ? process.env.GEN_SALT : 10)
                    .then(function (hashPswd) {
                    var newUser = new schema_1.default({
                        username: req.body.username,
                        mail: req.body.mail,
                        phone: req.body.phone,
                        password: hashPswd,
                        profilePicture: '',
                        accountype: constants_1.accountType.buyer,
                        signedOn: Date.now(),
                        adress: req.body.adress
                    });
                    _this.userService.createUser(newUser, function (error, newUser) {
                        if (error) {
                            service_1.mongoError(error, res);
                        }
                        else {
                            service_1.successResponse(res, "Creation de compte reussie, veuillez vous connexter avec vos nouveaux identifiants", newUser);
                        }
                    });
                })
                    .catch(function (error) {
                    res.status(constants_1.statusCode.bad_request).json({
                        message: 'Quelque chose ne marche pas comme prevu, veuillez reessayer',
                        success: false
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    UserController.prototype.receiveSmsFromAdmin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    UserController.prototype.placeOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
exports.default = new UserController();
