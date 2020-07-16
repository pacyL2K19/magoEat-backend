// import { statusCode } from './../common/constants';
// import { Response, Request } from 'express';
import { IUser } from './model';
import User from './schema'

export default class UserService {
    public createUser (userParams : IUser, callback : any ) {
        const user = new User (userParams)
        user.save(callback)
    }    
}
1