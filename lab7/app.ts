import express, { Request, Response } from "express"
import { bookRoutes } from "./src/books/book.route"
import { NextFunction } from "connect"

export const app = express()

app.use(express.json())

app.use("/books", bookRoutes)

app.use((req, res) => {
    res.status(404).send("Page not found !")
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message })
})