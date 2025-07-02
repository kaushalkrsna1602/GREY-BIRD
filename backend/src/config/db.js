import { ENV } from "./env.js"
import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI)
        console.log("Connected to DB SUCCESSFULLY")
    } catch (error) {
        console.log("Error connecting to MONGODB")
        process.exit(1)
    }
}