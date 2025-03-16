const express = require('express');
const app = express();
const postRouter = require('../routes/postsRoute')
function route(app){
    app.use("/api/posts", postRouter )
}
module.exports = route