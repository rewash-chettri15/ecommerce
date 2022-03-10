const express = require('express')
const router= express.Router()

const {getAllTshirt}= require('./fetch')

router.get("/hello",getAllTshirt)
 
    





module.exports= router;