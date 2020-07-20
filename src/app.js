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
var common_routes_1 = require("./api/V2/routes/common.routes");
var bodyParser = __importStar(require("body-parser"));
var express_1 = __importDefault(require("express"));
var mongoose = __importStar(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var users_routes_1 = require("./api/V2/routes/users.routes");
var App = /** @class */ (function () {
    function App() {
        /**
         * @mongoUrl needs to be a primitive one
         * So remember to use string type instead of String wich is an object
         * As you can face tsc trouble when you compile
         */
        this.mongoUrl = process.env.DATABASE_URL;
        this.userRoutes = new users_routes_1.UserRoutes();
        this.commonRoute = new common_routes_1.CommonRoutes();
        this.app = express_1.default();
        this.configApp();
        this, this.setupDB();
        this.userRoutes.route(this.app);
        this.commonRoute.route(this.app);
    }
    App.prototype.configApp = function () {
        this.app.use(bodyParser.json()); // supports json docs post 
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
    };
    App.prototype.setupDB = function () {
        if (this.mongoUrl) {
            mongoose.connect(this.mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
        }
    };
    return App;
}());
exports.default = new App().app;
