import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import sessionRoutes from "./src/routes/session.routes.js"
import userRoutes from "./src/routes/user.routes.js"
import { initMongoDB } from "./src/conect.js"
const app = express()

const PORT = 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser)
app.use(express.static("public"))

// initMongoDB()

mongoose.connect("mongodb+srv://juanmsesar:Sofi%402012@sesar.e7b0x92.mongodb.net/?retryWrites=true&w=majority&appName=sesar") 
.then(()=>{
    console.log("conectado a mongo")
})
.catch(()=>{
    console.log("no se conecta")
})

app.use("/api/session", sessionRoutes)
app.use("/api/user", userRoutes)

app.listen(PORT, ()=>{
    console.log("escuchando el puerto 500")
})