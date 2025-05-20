const express = require('express');
const app = express();

const postRouter = require('../routes/postsRoute');
const adminRouter = require('../routes/adminRoute')

function route(app){
    app.use("/api/posts", postRouter )
    app.use("/api/admin", adminRouter)
}
module.exports = route