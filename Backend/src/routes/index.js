const express = require('express');
const app = express();
const postRouter = require('../routes/postsRoute')
function route(app){
    app.get("/posts", postRouter )
}
module.exports = route