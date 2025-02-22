const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000; // dung port la process.env.PORT khong dung dc
const mongoose = require('mongoose');
const router = require("../Backend/src/routes/index")
//connect database
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)
.then(() => console.log("mongoDB connected"))
.catch(err => console.error("mongoDB connect error", err))

// //route test
app.get("/", (req,res)=> (res.send("hello world")) );
console.log("MongoDB URI:", mongoose.connection.host + "/" + mongoose.connection.name)

router(app)


//khởi động server
app.listen(port, () => console.log(`example website listening on port http://localhost:${port} `));
