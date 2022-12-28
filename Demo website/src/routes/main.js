const express=require('express')
const Detail = require('../models/Detail')
const Slider = require('../models/Slider')
const Service = require('../models/services')
const Contact = require('../models/Contact')

const routes=express.Router()

routes.get("/",async(req,res)=>{
    const details = await Detail.findOne({"_id":"63a5e55682a22e7135a2edbf"})
    const slides = await Slider.find()
    const services=await Service.find()
    // console.log(slides)
    res.render("index",{ 
        details: details,
        slides:slides,
        services:services,
     })
})

routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({"_id":"63a5e55682a22e7135a2edbf"})
    // console.log(details)
    res.render("gallery",{ details: details })
    
})

routes.post("/process-contact-form", async(req,res)=>{
    console.log("Form is submitted")
    try{
        const data= await Contact.create(req.body)
        res.redirect("/")
        console.log(data)
    }catch(err){
        console.log(err)
        res.redirect("/")
    }
})
module.exports = routes