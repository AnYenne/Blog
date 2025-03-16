const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000; 
const cors = require('cors')
const mongoose = require('mongoose');
const router = require("../Backend/src/routes/index")
//connect database
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
.then(() => console.log("mongoDB connected"))
.catch(err => console.error("mongoDB connect error", err))

//cors config
app.use(cors())

//route
router(app)

//khởi động server
app.listen(port, () => console.log(`example website listening on port http://localhost:${port} `));
