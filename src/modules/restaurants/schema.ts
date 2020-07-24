import { IRestaurant } from './model';
import mongoose, { Schema } from 'mongoose';

const RestauSchema : Schema = new Schema ({
    label : {
        type : String,
        required : true,
        trim : true
    },
    averageRate : {
        type : Number,
        required : false
    },
    description : {
        type : String,
        required : false
    },
    image : {
        type : String,
        required : true
    },
    addedOn : {
        type : String,
        required : false
    }
})