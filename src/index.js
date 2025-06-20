// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/db.js";
import e from "express";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000), () =>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    }
})
.catch((err) => {
    console.log("MONGO DB Connection Failed !!", err);
    
})




















/*
import express from "express"
const app = express()

// iffi approach: (ye fuct h)(isko immediatly execute krdo)
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR :", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR :", error)
        throw error
    }
})()
*/