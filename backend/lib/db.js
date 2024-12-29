import mongoose, { Mongoose } from "mongoose";
export const connectDb=async()=>{
try {
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb at${conn}`)
} catch (error) {
    console.log("Eror Connecting to mongodb",error.message)
    process.exit(1)
}
}