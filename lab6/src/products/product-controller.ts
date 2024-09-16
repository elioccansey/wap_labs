import { Request, Response } from "express";
import Product from "./product";

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
        res.status(404).json({message:"Invalid ID"})
    }
    let product :Product
    try {
       product = Product.findById(id)
       res.status(200).json(product)
    }catch(error){
        const er = error as Error
        res.status(404).json({message:er.message})
    }
}

export function handleDeleteById(req:Request, res:Response){
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.status(404).json({message:"Invalid ID"})
    }
    try{
        Product.deleteById(id)
        res.status(200).json({message: "Product deleted successfully !"})
    }catch(error){
        const er = error as Error
        res.status(404).json({message: er.message})
    }
}

