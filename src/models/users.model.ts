import * as connections from '../configs/db';
import {
    Schema,
    Document
} from 'mongoose';

/**
 * @interface IUserModel
 * @exports IUserModel
 * @extends mongoose.Document
 */

export interface IUserModel extends Document {
    username : String,
    password : String,
    adress : string,
    phone : number,
    mail : String,
};

/**
 * @Schema Schema
 * @UserSchema
 */

const UserSchema : Schema = new Schema ({
    username : {
        type : String,
        unique : true,
        trim : true,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true,
        unique : true
    },
    mail : {
        type : String,
        required : true,
        unique : true,
    }
});

export default connections.db.model<IUserModel>('User', UserSchema);