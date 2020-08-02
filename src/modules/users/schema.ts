import { IUser } from './model';
import mongoose, { Schema } from 'mongoose';
// import { accountType } from '../common/constants'

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
    },
    password : {
        type : String,
        required : true
    },
    adress : {
        type : String,
    },
    phone : {
        type : String,
    },
    accountType : {
        type : String,
    },
    profilePicture : {
        type : String
    },
    mail : {
        type : String
    },
    signedOn : {
        type : String
    }
})

export default mongoose.model<IUser>('User', UserSchema);