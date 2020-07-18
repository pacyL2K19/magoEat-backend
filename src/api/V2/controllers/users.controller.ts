import { successResponse } from './../modules/common/service';
import { statusCode } from './../modules/common/constants';
import { loginValidation } from './../validations/users.validation';
import { Response, Request } from 'express';
import User from '../modules/users/schema'
import * as bcrypt from 'bcrypt';
import validations from '../validations';
import UserService from '../modules/users/service'

export class UserController {
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
                        
                    })
            })
            .catch()
    }
    public async signup (req : Request, res : Response) {

    } 
    public async receiveSmsFromAdmin () {

    }
}

export default new UserController ()