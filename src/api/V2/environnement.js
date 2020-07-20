"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var Environments;
(function (Environments) {
    Environments["local_environnement"] = "local";
    Environments["dev_environnement"] = "dev";
    Environments["prod_environnement"] = "prod";
})(Environments || (Environments = {}));
var Environment = /** @class */ (function () {
    function Environment(environment) {
        this.environment = environment;
    }
    Environment.prototype.getPort = function () {
        if (this.environment === Environments.dev_environnement) {
            /**
             * In developpement :: port 8081
             */
            return 8081;
        }
        else if (this.environment === Environments.local_environnement) {
            return 5000;
        }
        else if (this.environment === Environments.prod_environnement) {
            return 8080;
        }
        else {
            return 3000;
        }
    };
    Environment.prototype.getDBName = function () {
        if (this.environment === Environments.dev_environnement) {
            /**
             * create database for each environment
             */
            return 'mago_eat_dev';
        }
        else if (this.environment === Environments.local_environnement) {
            return 'mago_eat_test';
        }
        else if (this.environment === Environments.prod_environnement) {
            return 'mago_eat_prod';
        }
        else {
            return 'magoeat_any_db';
        }
    };
    return Environment;
}());
exports.default = new Environment(Environments.dev_environnement);
