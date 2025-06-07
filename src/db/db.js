// Database ko hamesha Try & Catch m rakhoo...
// Async Await use krna bh better approach h...

import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connecntion failed...", error);
        process.exit(1)
    }
}

export default connectDB