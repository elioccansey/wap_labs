import express, { NextFunction } from "express"
import { Request, Response } from "express";
import productRoutes from "./products/products-routes";
import { BadRequestError } from "./products/bad-request-error";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/products", productRoutes)

app.use((req, res)=>{
    res.status(404).send("Page not found");
})

app.use((error:Error, req:Request, res:Response, next:NextFunction)=>{
    if(error instanceof BadRequestError){
        
    }
    res.status(404).json({message:error.message})
})

export default app;