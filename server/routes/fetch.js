const express = require('express')

const router= express.Router()
const tshirtModel =require('../models/tshirtModel')


const getAllTshirt=async(req,res) => {
    
    try {
        await tshirtModel.find().then((data) => {
          if (data) {
            res.status(200).json(data);
          }
        });
       
      } catch (error) {
        res.send({ message: "rewash" });
      }
   
   
}




module.exports = {
    getAllTshirt
  };
