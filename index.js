require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require('./routes/product.route.js');
const URI = process.env.MONGODB_URI

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API")
});

mongoose.connect(URI)
.then(() =>{
    console.log("Connected to the Database!");
    app.listen(3000, () => {
        console.log("Server is Running on port 3000");
    })
})
.catch((error) => {
    console.log("Connection failed: ", error);
})