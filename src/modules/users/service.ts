// import { statusCode } from './../common/constants';
// import { Response, Request } from 'express';
import { IUser } from './model';
import User from './schema'

export default class UserService {
    public createUser (userParams : IUser, callback : any ) {
        const user = new User (userParams)
        user.save(callback)
    }
    public findUserId(query : any, callback : any) {
        User.findOne(query, callback)
    }

    public updateUser (userParams : IUser, callback : any){
        const query = {_id : userParams._id}
        User.updateOne(query, userParams, callback)
    }

    public deleteUser (_id : String, callback : any) {
        const query = { _id }
        User.deleteOne(query, callback)
    }
}
1