import { Response, Request } from 'express';
import { statusCode } from './constants';

export const successResponse = (res : Response, message : String, DATA : any ) => {
    res.status(statusCode.success).json({
        status : 'Success',
        success : true,
        message,
        DATA
    })
}

export const faillureResponse = (res : Response, message : String, DATA : any ) => {
    res.status(statusCode.bad_request).json({
        status : 'Faillure',
        success : false,
        message,
        DATA
    })
}

export const insufficientParamters = (res : Response, message : String, DATA : any ) => {
    res.status(statusCode.bad_request).json({
        status : 'Faillure',
        success : false,
        message,
        DATA
    })
}

export const mongoError = (err : any, res : Response ) => {
    res.status(statusCode.internal_server_error).json({
        status : 'Faillure',
        success : false,
        message : 'MongoDB error',
        DATA : err
    })
}