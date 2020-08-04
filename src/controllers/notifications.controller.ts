import { Request, Response, NextFunction } from 'express';
import request1 from 'request';

export class NotificationController {
    public confirmationCode (req : Request, res : Response ) {

    }
    public sendMessageConfirmation (req : Request, res: Response) {

    }
    public sendMessageToConfirmOrder (req : Request, res : Response) {
        
    }
}

export default new NotificationController ()