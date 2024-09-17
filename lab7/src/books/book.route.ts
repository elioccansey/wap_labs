import express from "express"
import { getAllBooks, saveBook, listAllBooks } from "./book.controller"

export const bookRoutes = express.Router()

bookRoutes.get("/", getAllBooks)
bookRoutes.post("/", saveBook)
bookRoutes.get("/list", listAllBooks)


