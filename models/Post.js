const mongoose = require('mongoose');

// create a schema  
const schemaOfPost = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    
    date : {
        type: Date,
        default: Date.now
    }
});

// export the model
module.exports = mongoose.model('Posts', schemaOfPost);