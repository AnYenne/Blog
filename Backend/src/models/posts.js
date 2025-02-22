const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    content: String,
    create_at: Date,
    image: {type: Array},
},{collection: 'posts'})

module.exports = mongoose.model('posts', PostSchema, "posts")