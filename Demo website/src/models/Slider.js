const mongoose= require('mongoose')
const Slider = mongoose.Schema([{
    title:String,
    subtitle:String,
    imageURL:String,
    active:String,
},])

module.exports= mongoose.model("slider",Slider)