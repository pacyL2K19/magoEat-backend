import { IUser } from './../modules/users/model';
import { successResponse, faillureResponse, mongoError } from './../modules/common/service';
import { statusCode, accountType } from './../modules/common/constants';
import { loginValidation, signupValidation } from './../validations/users.validation';
import { Response, Request } from 'express';
import User from '../modules/users/schema'
import * as bcrypt from 'bcrypt';
// import validations from '../validations';
import UserService from '../modules/users/service'

export class UserController {
    private userService : UserService = new UserService ()
    public login (req : Request, res : Response ) {
        // first, let validate data : 
        const {error, value} = loginValidation.validate(req.body)
        if (error !== undefined)
            res.status(statusCode.bad_request).json({
                success : false,
                message : `Rassurez vous d'avoir bien completer les champs requis dans le format requis`,
                status : 'Failled'
            })
        // we have to check if the user exists 
        User.findOne({ username : value.username })
            .then((user) => {
                if (user) {
                    res.status(statusCode.forbiden).json({
                        success : false,
                        status : 'Faillure',
                        message : `Cet utulisateur n'existe pas, avez-vous deja un compte MagoEat ?`
                    })
                }
                bcrypt.compare(req.body.password, value.password)
                    .then((isSame) => {
                        if (!isSame) {
                            res.status(statusCode.forbiden).json({
                                success : false,
                                status : 'Faillure',
                                message : `Mot de passe incorrect`
                            })
                        }
                        successResponse(res, 'Ouverture de session reussie', req.body)
                    })
                    .catch((err) => {
                        faillureResponse(res, 'Quwlque chose ne va pas, veuillez reessayer', req.body)
                    })
            })
            .catch((err) => {
                faillureResponse(res, 'Quwlque chose ne va pas, veuillez reessayer', req.body)
            })
    }
    public async signup (req : Request, res : Response) {
        const { error, value } = signupValidation.validate(req.body)
        if (error !== undefined) {
            res.status(statusCode.bad_request).json({
                success : false,
                message : `Rassurez vous d'avoir rempli `
            })
        }
        /**
         * Use bcrypt to hash password
         */
        bcrypt.hash(value.password, process.env.GEN_SALT)
            .then((hashPswd) => {
                const newUser : IUser = new User ({
                    username : req.body.username,
                    mail : req.body.mail,
                    phone : req.body.phone,
                    password : hashPswd,
                    profilePicture : '',
                    accountype : accountType.buyer,
                    signedOn : Date.now(),
                    adress : req.body.adress
                })
                this.userService.createUser(newUser, (error : any, newUser : any) => {
                    if (error) {
                        mongoError(error, res)
                    } else {
                        successResponse(res, `Creation de compte reussie, veuillez vous connexter avec vos nouveaux identifiants`, newUser)
                    }
                })
            })
            .catch((error) => {
                res.status(statusCode.bad_request).json({
                    message : 'Quelque chose ne marche pas comme prevu, veuillez reessayer',
                    success : false
                })
            })
    } 
    public async receiveSmsFromAdmin () {

    }
    public async placeOrder () {

    }
}

export default new UserController ()