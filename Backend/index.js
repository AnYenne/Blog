const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000; // dung port la process.env.PORT khong dung dc
const mongoose = require('mongoose');



//route test
app.get("/", (req,res)=> (res.send("hello world")) );

//khởi động server
app.listen(port, () => console.log(`example website listening on port http://localhost:${port} `));
