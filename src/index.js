// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path: './env'
})

connectDB()























/* 
import express from "express";
const app = express()

// iffi approach: (ye fuct h)(isko immediatly execute krdo)
( async () =>{
    // data base sy jb bh baat ho try catch lagana hi h
    try {
    // agr sb sahi raha to,
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()

function connectDB(){}
connectDB()
*/