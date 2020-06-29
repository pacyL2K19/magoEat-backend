import { sendConfMess } from './../controllers/auth.controller';
import { Router } from 'express';

const route = (router : Router) => {
    router.route('/msg_conf')
        .post(sendConfMess)
}

export default route;