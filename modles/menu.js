
const mongoose = require('mongoose');
    // MenuItem Schema
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    desc:{        
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true 
    },
    taste: {
        type: String,
        required: true ,
        enum:['sour','sweeet','good']
    },
});
const Menu = mongoose.model('Menu', menuItemSchema);
module.exports=Menu;