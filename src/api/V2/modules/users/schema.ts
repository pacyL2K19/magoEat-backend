import { IUser } from './model';
import { Schema } from 'mongoose';

/**
 * @mongoose 
 * @Schema
 * @const userSchema to be exported
 */

const UserSchema : Schema = new Schema ({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }
})