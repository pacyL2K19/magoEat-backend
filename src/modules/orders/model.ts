import { Document } from 'mongoose'

export interface IOrder extends Document {
    label : String;
    image : String;
    averageRate : number;
    price : String;
    restaurantID : String;
}

