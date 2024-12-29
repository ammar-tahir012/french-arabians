import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import { connectDb } from "./lib/db.js";
import  cookieParser from "cookie-parser";
//Routes
dotenv.config()
const PORT=process.env.PORT || 5000
const app = express()
app.use(cookieParser())
app.use(express.json({limit :"10mb"}))//allow u to parse the body of the request
//Authentication
app.use("/api/auth",authRoutes)
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
    connectDb()
})
// VdskCq2Yrm9MBy48