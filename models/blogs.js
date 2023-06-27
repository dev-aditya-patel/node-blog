const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema =new Schema({
    title: {
        type:"String",
        required:true,
        trim: true

    },
    snippet:{
        type:"String",
        required: true,
        trim: true
    },
    body:{
        type:"String",
        required: true,
        trim: true
    }

}, {timestamps: true});
const Blogs = mongoose.model("Blogs",blogSchema);
module.exports =  Blogs;
