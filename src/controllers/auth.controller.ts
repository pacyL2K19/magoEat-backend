import { BAD_REQUEST, OK, FORBIDDEN, INTERNAL_SERVER_ERROR } from './../constants/code-status';
import { Request, Response, NextFunction} from 'express';
import User, { IUserModel } from '../models/users.model';
import userValidation from '../validations/auth.validation';
import bcrypt, { hash } from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
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
