const express = require('express');
const app = express();
require('dotenv').config()
const port = 3000; // dung port la process.env.PORT khong dung dc

app.get("/", (req,res)=> (res.send("hello world")) );
app.listen(port, () => console.log(`example website listening on port http://localhost:${port} `));
