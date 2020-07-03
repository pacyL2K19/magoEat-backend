const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    username : {
        type : String, 
        required : true, 
        unique : true
    },
    password : {
        type : String, 
        required : true
    },
    mail : {
        type : String, 
        required : true, 
        unique : true
    },
    adress : {
        type : String,
    }, 
    phone : {
        type : Number,
        unique : true
    },
    msgCode : {
        type : String
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)