import { sendConfMess } from './../controllers/auth.controller';
import { Router } from 'express';

export const route = (router : Router) => {
    router.route('/msg_conf')
        .post(sendConfMess)
}