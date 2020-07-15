import { statusCode } from './../common/constants';
import { Response, Request } from 'express';
import { IUser } from './model';
import User from './schema'

export default class UserService {
    public createUser (userParams : IUser, res : Response, req : Request, callback : any ) {
        const user = new User (userParams)
        user.save()
            .then(user => {
                res.status(statusCode.success).json({
                    
                })
            })
            .catch((err) => {
                res.status(statusCode.bad_request).json({
                    success : false,
                    message : 'Failed to create a user, something went wrong',
                    err
                })
            })
    }    
}
