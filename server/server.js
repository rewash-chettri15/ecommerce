const express = require("express");
const dotenv= require("dotenv");
const connectDB= require('./config/config');
require("colors");
const morgan = require("morgan");
const getAllTshirts= require('./routes/tshirtRoute')

dotenv.config()

connectDB()

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//router 
app.use("/api/getAllTshirts", getAllTshirts);

app.get("/",(req,res)=>{
    res.send("<h1> Hello from node server vai nodemon </h1>");

});

const port= process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});