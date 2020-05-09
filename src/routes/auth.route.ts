import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller';

const route = (router : Router) => {
    router.route('/signup')
        .post(signup);
    router.route('/login')
        .post(login);
};

export default route;