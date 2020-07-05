export interface IUser {
    _id? : String;
    username : String;
    mail : String;
    phone : String;
    password : String;
    accountType? : String;
    signedInOn : Date;
    profileImage : String
}