const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const shoesModel=require("./models/dataModel.js")
dotenv.config()
//app config
const app=express()
const port=process.env.PORT || 9000
const connectUrl=`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.yde1grw.mongodb.net/ShoesStore?retryWrites=true&w=majority`
//MiddleWares
app.use(express.json({ limit: '50mb' }));
app.use(express.json())
mongoose.set('strictQuery', true)
app.use(cors());
//db conifg 
mongoose.connect(connectUrl)
// Api endpoints


app.get("/",async(req,res)=>{
    try {
        const data=await shoesModel.find()
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
    
})
//Listeners
app.listen(port,()=>{console.log(`listening on port : ${port} `)})