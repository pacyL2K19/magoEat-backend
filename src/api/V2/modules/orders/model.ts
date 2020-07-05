import { Document } from 'mongoose'

export interface IOrder extends Document {
    image : String;
    averageRate : number;
    price : String;
}

