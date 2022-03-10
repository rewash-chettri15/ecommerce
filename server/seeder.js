const mongoose = require('mongoose')
const dotenv= require('dotenv')
require('colors')
const connectDB = require('./config/config')
const Tshirt= require('./models/tshirtModel')
const Tshirts= require ('./data/tshirtdata')

//config env
dotenv.config()
connectDB()

//import data 
const importData = async() =>{
    try {
        await Tshirt.deleteMany()
        const sampleData= Tshirts.map(tshirt =>{return {...tshirt}})
        await Tshirt.insertMany(sampleData)
        console.log('Data imported'.bgGreen.white)
        process.exit()
    } catch (error) {
        console.log(`${error}`.bgRed.white)
        process.exit(1)
    }
}

const dataDestroy=()=>{}
if(process.argv[2]==='-d'){
    dataDestroy()
}else{
    importData()
}