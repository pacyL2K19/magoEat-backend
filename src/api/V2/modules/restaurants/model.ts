import { Document } from 'mongoose';
export interface IRestaurant extends Document{
    label : String;
    averageRate? : number;
    description : String;
    adresse : String;
    image : String;
    addedOn? : Date
}