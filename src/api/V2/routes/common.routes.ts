import { Application, Response, Request, NextFunction } from 'express';
import { statusCode } from '../modules/common/constants';

export class CommonRoutes {
    public route (app : Application) {
        app.use('*', (req : Request, res : Response, next : NextFunction) => {
            res.status(statusCode.unauthorized).send({
                message : `Un probleme avec l'application ?`,
                success : false,
                status : 'Dangerous'
            })
        })
    }
}