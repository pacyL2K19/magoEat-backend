import { IOrder } from './model';
import mongoose, { Schema, model } from 'mongoose';
const commonOptions = {
    type : String,
    required : true,
    trim : false 
}

// const OrderSchema : Schema = new Schema ({
//     label : {
//         ...commonOptions,
//         trim : true
//     },
//     image : commonOptions,
//     averageRate : commonOptions,
//     price : commonOptions,
//     restaurantID : commonOptions
// })

// export default model<IOrder>('Orders', OrderSchema);