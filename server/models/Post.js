const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true

    },
    email:{
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);