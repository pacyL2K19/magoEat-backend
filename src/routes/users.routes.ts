import { UserController } from './../controllers/users.controller';
import { Application, Request, Response } from 'express';

/**
 * @class for user routes 
 */
export class UserRoutes {
    private userController : UserController = new UserController ()
    public route (app : Application) {
        app.post('/api/v2/login', (req : Request, res : Response) => {
            this.userController.login(req, res)
        })
        app.post('/api/v2/signup', (req : Request, res : Response) => {
            this.userController.signup(req, res)
        })
        // app.get('/api/v2', (req : Request, res : Response) => {
        //     res.status(200).json({
        //         message : 'ok'
        //     })
        // })
    }
}