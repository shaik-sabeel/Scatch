const mongoose = require('mongoose');



const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        cart :{
            type: Array,
            default : []
        },
        isAdmin:{
            type: Boolean
        },
        orders :{
            type: Array,
            default : []
        },
        contact : Number,
        picture: String
    }
)

module.exports = mongoose.model('User', userSchema);