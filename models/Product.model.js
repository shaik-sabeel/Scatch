const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        
        discount : Number,
        bgColor :String,
        panelColor : String,
        textColor : String
    }
)

module.exports = mongoose.model('Product', productSchema);