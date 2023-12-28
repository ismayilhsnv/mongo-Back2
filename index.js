const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const ProductRouter=require("./routes/Product.routes")
require("dotenv").config()
const PORT=process.env.PORT || 8082
app.use(express.json())
app.use(cors())
app.use("/products",ProductRouter)

mongoose.connect("mongodb+srv://Ismayil:ismayil123@ismayil.dthncvf.mongodb.net/start").then(res=>{
    console.log("connected to db")
})

app.listen(PORT,()=>{
    console.log("port is activated");
})