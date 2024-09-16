import express from "express"
import productRoutes from "./products/products-routes";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/products", productRoutes)

export default app;