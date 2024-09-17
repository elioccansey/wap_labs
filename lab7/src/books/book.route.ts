import express from "express"
import { getAllBooks, saveBook } from "./book.controller"

export const bookRoutes = express.Router()

bookRoutes.get("/", getAllBooks)
bookRoutes.post("/", saveBook)


