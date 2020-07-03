const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const orderSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    orderName : {
        type : String,
        required : true
    },
    restauName : {
        type : String,
        required : true
    },
    rate : {
        type : Number,
        required : false
    },
    ratable : {
        type : Boolean,
        required : true
    },
    feedBack : {
        type : String,
        required : false
    }
})

module.exports = mongoose.model('Order', orderSchema)