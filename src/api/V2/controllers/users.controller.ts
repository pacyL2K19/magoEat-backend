import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import validations from '../validations';
import UserService from '../modules/users/service'

export class UserController {
    async login (req : Request, res : Response ) {
        // first, let validate data : 
        
    }
    async signup (req : Request, res : Response) {

    } 
    async receiveSmsFromAdmin () {

    }
}

export default new UserController ()