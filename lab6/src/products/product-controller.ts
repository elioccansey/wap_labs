import { Request, Response } from "express";
import Product from "./product";
import { BadRequestError } from "./bad-request-error";

export function handleSave(req:Request, res:Response){
    const {id,price, description, title} = req.body;
    //Validate inputs
    const newProduct = new Product(id, title, price, description)
    newProduct.save();
    res.status(201).json(newProduct);
}

export function handleUpdate(req:Request, res:Response){
    const {id,price, description, title} = req.body;
    const product = new Product(id, title, price, description);
    product.update();
    res.status(200).json(product)
}

export function handleFetchAll(req:Request, res:Response){
    res.status(200).json(Product.fetchAll());
}

export function handleFindById(req:Request, res:Response){
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        // res.status(404).json({message:"Invalid ID"})
        throw new BadRequestError("Invalid ID")
    }
    let product :Product
    product = Product.findById(id)
    res.status(200).json(product)
   
}

export function handleDeleteById(req:Request, res:Response){
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        // res.status(404).json({message:"Invalid ID"})
        throw new BadRequestError("Invalid ID")

    }
    Product.deleteById(id)
    res.status(200).json({message: "Product deleted successfully !"})
}

