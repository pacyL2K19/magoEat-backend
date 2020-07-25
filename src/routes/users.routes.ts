import { UserController } from './../controllers/users.controller';
import { Router } from 'express';

/**
 * @class for user routes
 */
export class UserRoutes {
    private userController : UserController = new UserController ()
    public routes (router : Router) {
        router.route('/login')
            .post(this.userController.login);
        router.route('/signup')
            .post(this.userController.signup)
        // app.post('api/v2/login', (req : Request, res : Response) => {
        //     this.userController.login(req, res)
        // })
        // app.post('api/v2/signup', (req : Request, res : Response) => {
        //     this.userController.signup(req, res)
        // })
    }
}