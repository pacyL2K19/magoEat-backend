import { Document } from 'mongoose';
export interface IUser extends Document {
    username : String;
    mail : String;
    phone : String;
    password : String;
    accountType? : String;
    signedInOn : Date;
    profileImage : String
}