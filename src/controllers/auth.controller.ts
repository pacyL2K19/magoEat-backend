import { BAD_REQUEST, OK, FORBIDDEN, INTERNAL_SERVER_ERROR } from './../constants/code-status';
import { Request, Response, NextFunction} from 'express';
import User, { IUserModel } from '../models/users.model';
import userValidation from '../validations/auth.validation';
import bcrypt, { hash } from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import request1 from 'request';
dotenv.config();

/**
 * @exports 
 * @const signup function
 */

export const signup = (req : Request, res : Response, next : NextFunction) => {
    /**
     * using data validation
     */
    const { error, value } = userValidation.validate(req.body);

    if (error !== undefined) {
        res.status(BAD_REQUEST).json({ errorMessage : 'Veuillez verifier que toutes les donnees sont correctes'});
    }
    bcrypt.hash(value.password, process.env.GEN_SALT)
        .then(hash => {
            const user : IUserModel = new User ({
                username : req.body.username,
                password : hash,
                phone : req.body.phone,
                adress : req.body.adress,
                mail : req.body.mail
            })
            user.save()
                .then(user => res.status(OK).json({ user }))
                .catch(() => res.status(FORBIDDEN).json({ errorMessage : 'Echec d\'inscription'}))
        })
        .catch(() => res.status(INTERNAL_SERVER_ERROR).json({ errorMessage : 'Mauvaise requete'}))
}

export const login = (req : Request, res : Response, next : NextFunction) => {
    /**
     * @validation 
     */
    const { error, value } = userValidation.validate(req.body);
    if (error !== undefined) {
        res.status(BAD_REQUEST).json({ errorMessage : 'Veuillez checker vos inputs'})
    }

    User.findOne({username : value.username} || {mail : value.email})
        .then(user => {
            if (!user) {
                res.status(FORBIDDEN).json({message : 'Utilisateur introuvable'});
            }
            /**
             * @bcryptCompare 
             * checking if password maches
             */
            bcrypt.compare(user.password, req.body.password)
                .then(validUser => {
                    if (!validUser) {
                        res.status(FORBIDDEN).json({ message : 'Mot de passe incorrect'})
                    }
                    res.status(OK).json({
                        username : user.username,
                        mail : user.mail,
                        token : jwt.sign(
                            { username : user.username},
                            process.env.JWT_SECRET,
                            {expiresIn : '48h'}
                        )
                    })
                })
                .catch(() => res.status(INTERNAL_SERVER_ERROR).json({ message : 'Echec de connection'}))
        })
        .catch(() => res.status(INTERNAL_SERVER_ERROR).json({ message : 'Echec de connection'}))
}

export const sendConfMess = (req : Request, res : Response, next : NextFunction) => {
    if (!req.body.phone) {
        return res.status(BAD_REQUEST).send({ 'message' : 'Veuillez completer le numero de telephone'});
    } else if (!req.body.msgCode) {
        return res.status(BAD_REQUEST).send({ 'message' : 'Le numero manque '});
    }

    const phone : number = req.body.phone;
    const username : string = process.env.USERNAME_SMS;
    const password : string = process.env.PASSWORD_SMS;
    const source : string = 'MAGOEAT APPLICATION';
    let msg = req.body.msgDetails + ' ' + req.body.msgCode;
    request1('http://api.rmlconnect.net/bulksms/bulksms?username='+username+'&password='+password+'&type=0&dlr=1&destination='+phone+'&source='+source+'&message='+msg, function (error1, response1, body1) {
        console.error('error:', error1); // Print the error if one occurred
        console.log('statusCode:', response1 && response1.statusCode);
        console.log('body:', body1); 
        res.status(response1.statusCode).send({ "message": "Code envoye avec success"});
    })
}

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
