import { UserController } from './../controllers/users.controller';
import { Application, Request, Response } from 'express';

export class UserRoutes {
    private userController : UserController = new UserController ()
    public route (app : Application) {
        app.post('api/v2/login', (req : Request, res : Response) => {
            this.userController.login(req, res)
        })
        app.post('api/vs/signup', (req : Request, res : Response) => {
            this.userController.signup(req, res)
        })
    }
}