import { Response, Request } from 'express';
import { statusCode } from './constants';

export const successResponse = (res : Response, message : String, DATA : any ) => {
    res.status(statusCode.success).json({
        status : 'success',
        message,
        DATA
    })
}

export const faillureResponse = (res : Response, message : String, DATA : any ) => {
    res.status(statusCode.bad_request).json({
        status : 'faillure',
        message,
        DATA
    })
}

export const insufficientParamters = (res : Response, message : String, DATA : any ) => {
    res.status(statusCode.bad_request).json({
        status : 'faillure',
        message,
        DATA
    })
}

export const mongoError = (err : any, res : Response ) => {
    res.status(statusCode.internal_server_error).json({
        status : 'faillure',
        message : 'MongoDB error',
        DATA : err
    })
}