const express= require('express')
const routes= require("./routes/main.js")
const hbs= require('hbs')
const mongooses= require('mongoose')
const BodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const Detail= require('./models/Detail')
const Slider= require('./models/Slider')
const Service= require('./models/services')

const app = express()
app.use(BodyParser.urlencoded({ extended: true }))
app.use("/static",express.static("public"))
app.use("",routes)

app.set('view engine', 'hbs')
app.set("views","views")

hbs.registerPartials("views/partials")


//db connections
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1/demo_website",()=>{
    console.log("db connected")
    
//     Service.create([{
//         icon:"fa-sharp fa-solid fa-book",
//         title:"Provide best courses",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc velit, tincidunt eget tempus et, auctor a odio. Cras finibus neque quis .",
//         linktext:"Check",
//         link:"https//youtube.com",
//     },
//     {
//         icon:"fa-sharp fa-solid fa-feather",
//         title:"Feather",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc velit, tincidunt eget tempus et, auctor a odio. Cras finibus neque quis .",
//         linktext:"Check",
//         link:"https//youtube.com",
//     },
//     {
//         icon:"fa-solid fa-book",
//         title:"muze kya me book hu",
//         description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc velit, tincidunt eget tempus et, auctor a odio. Cras finibus neque quis .",
//         linktext:"Check",
//         link:"https//youtube.com",
//     },
// ])
   
    // Slider.create([{
    //     title:"Java",
    //     subtitle:"Java is most popular language",
    //     imageURL:"/static/images/s1.jpg",
    // },
    // {
    //     title:"Python",
    //     subtitle:"Code kar le bhai ye mat padh!",
    //     imageURL:"/static/images/s2.jpg",
    // },
    // {
    //     title:"C++",
    //     subtitle:"Tu gaya nahi ab tak?",
    //     imageURL:"/static/images/s3.jpg",
    // },])
   
   
    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconURL:"static/images/logo.jpg",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //     },
    //         {
    //             label:"Services",
    //             url:"/services"
    //     },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //     },
    //         {
    //             label:"Contact Us",
    //             url:"/contact"
    //     },
    //         {
    //             label:"About",
    //             url:"/about"
    //     },]
    // })
})





app.listen(process.env.PORT | 5000,()=>{
    console.log('listening on port 5000...')
})