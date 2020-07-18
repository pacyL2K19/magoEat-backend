import { UserController } from './../controllers/users.controller';
import { Application, Request, Response } from 'express';

export class UserRoutes {
    private userController : UserController = new UserController ()
    public route (app : Application) {
        app.post()
    }
}