import { Application, Response, Request, NextFunction } from 'express';
import { statusCode } from '../modules/common/constants';
import User from '../modules/users/schema'

export class CommonRoutes {
    public route (app : Application) {
        app.use('/api/login', (req : Request, res : Response, next : NextFunction) => {
            res.status(statusCode.unauthorized).send({
                message : `Un probleme avec l'application ?`,
                success : false,
                status : 'Dangerous'
            })
        })

        // app.get('/', (req : Request, res : Response, NextFunction) => {
            
        // })
    }
}