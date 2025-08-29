const mongoose = require('mongoose');



const ownerSchema = new mongoose.Schema(
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
        products :{
            type: Array,
            default : []
        },
        gstin : String,
        picture: String
    }
)

module.exports = mongoose.model('Owner', ownerSchema);