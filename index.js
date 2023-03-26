import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import router from './routes/route.js';
import connectDB from './database/db.js';
const app=express();

app.use(cors())

dotenv.config()

//db connection
connectDB()

app.use("/",router)


const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is Running on port ${PORT}`)
})