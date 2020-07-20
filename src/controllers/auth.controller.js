"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var code_status_1 = require("./../constants/code-status");
var users_model_1 = __importDefault(require("../models/users.model"));
var auth_validation_1 = __importDefault(require("../validations/auth.validation"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var request_1 = __importDefault(require("request"));
dotenv_1.default.config();
/**
 * @exports
 * @const signup function
 */
exports.signup = function (req, res, next) {
    /**
     * using data validation
     */
    var _a = auth_validation_1.default.validate(req.body), error = _a.error, value = _a.value;
    if (error !== undefined) {
        res.status(code_status_1.BAD_REQUEST).json({ errorMessage: 'Veuillez verifier que toutes les donnees sont correctes' });
    }
    bcrypt_1.default.hash(value.password, process.env.GEN_SALT)
        .then(function (hash) {
        var user = new users_model_1.default({
            username: req.body.username,
            password: hash,
            phone: req.body.phone,
            adress: req.body.adress,
            mail: req.body.mail
        });
        user.save()
            .then(function (user) { return res.status(code_status_1.OK).json({ user: user }); })
            .catch(function () { return res.status(code_status_1.FORBIDDEN).json({ errorMessage: 'Echec d\'inscription' }); });
    })
        .catch(function () { return res.status(code_status_1.INTERNAL_SERVER_ERROR).json({ errorMessage: 'Mauvaise requete' }); });
};
exports.login = function (req, res, next) {
    /**
     * @validation
     */
    var _a = auth_validation_1.default.validate(req.body), error = _a.error, value = _a.value;
    if (error !== undefined) {
        res.status(code_status_1.BAD_REQUEST).json({ errorMessage: 'Veuillez checker vos inputs' });
    }
    users_model_1.default.findOne({ username: value.username } || { mail: value.email })
        .then(function (user) {
        if (!user) {
            res.status(code_status_1.FORBIDDEN).json({ message: 'Utilisateur introuvable' });
        }
        /**
         * @bcryptCompare
         * checking if password maches
         */
        bcrypt_1.default.compare(user.password, req.body.password)
            .then(function (validUser) {
            if (!validUser) {
                res.status(code_status_1.FORBIDDEN).json({ message: 'Mot de passe incorrect' });
            }
            res.status(code_status_1.OK).json({
                username: user.username,
                mail: user.mail,
                token: jsonwebtoken_1.default.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '48h' })
            });
        })
            .catch(function () { return res.status(code_status_1.INTERNAL_SERVER_ERROR).json({ message: 'Echec de connection' }); });
    })
        .catch(function () { return res.status(code_status_1.INTERNAL_SERVER_ERROR).json({ message: 'Echec de connection' }); });
};
exports.sendConfMess = function (req, res, next) {
    if (!req.body.phone) {
        return res.status(code_status_1.BAD_REQUEST).send({ 'message': 'Veuillez completer le numero de telephone' });
    }
    else if (!req.body.msgCode) {
        return res.status(code_status_1.BAD_REQUEST).send({ 'message': 'Le numero manque ' });
    }
    var phone = req.body.phone;
    var username = process.env.USERNAME_SMS;
    var password = process.env.PASSWORD_SMS;
    var source = 'MAGOEAT APPLICATION';
    var msg = req.body.msgDetails + ' ' + req.body.msgCode;
    request_1.default('http://api.rmlconnect.net/bulksms/bulksms?username=' + username + '&password=' + password + '&type=0&dlr=1&destination=' + phone + '&source=' + source + '&message=' + msg, function (error1, response1, body1) {
        console.error('error:', error1); // Print the error if one occurred
        console.log('statusCode:', response1 && response1.statusCode);
        console.log('body:', body1);
        res.status(response1.statusCode).send({ "message": "Code envoye avec success" });
    });
};
//         app.post("/send_sms_from_rmlconnect", (request, response) => {
//             if(!request.body.phone){
//                 return response.status(401).send({ "message": "Veiller completer le numero du client"});
//             } else if(!request.body.msg_code){
//                 return response.status(401).send({ "message": "Veiller completer le message cle!"});
//             }
//             var phone = request.body.phone.substring(1);
//             var username = "guillainb";
//             var password = "lPhhex3H";
//             var source = "BOMOKO APP";
//             var msg = request.body.msg_detail +" "+ request.body.msg_code;
//             request1('http://api.rmlconnect.net/bulksms/bulksms?username='+username+'&password='+password+'&type=0&dlr=1&destination='+phone+'&source='+source+'&message='+msg, function (error1, response1, body1) {
//                 console.error('error:', error1); // Print the error if one occurred
//                 console.log('statusCode:', response1 && response1.statusCode);
//                 console.log('body:', body1); 
//                 response.status(response1.statusCode).send({ "message": "Code envoye avec success"});
//             });
//         });
// }
