import express from "express"
import { handleDeleteById, handleFetchAll, handleFindById, handleSave, handleUpdate } from "./product-controller"

const productRoutes = express.Router()

productRoutes.get("/", handleFetchAll)
productRoutes.put("/", handleUpdate)
productRoutes.post("/", handleSave)

productRoutes.get("/:id", handleFindById)
productRoutes.delete("/:id", handleDeleteById)

export default productRoutes;

