const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const {connectToMongoDb} = require('./final/connect');
connectToMongoDb("mongodb://127.0.0.1:27017/products");

app.listen(3000,()=>{
    console.log("running on port 3000");
})