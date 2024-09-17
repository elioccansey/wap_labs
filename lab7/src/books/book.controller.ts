import { Request, Response } from "express"
import { Book } from "./book"
import { Author } from "../author/author"
import path from "path"

const saveBook = (req: Request, res: Response,) => {
    const { id, title, isbn, publishedDate, author } = req.body
    const newBook = new Book(id, title, isbn, new Date(publishedDate), new Author(author.id, author.name)).save()
    res.status(201).json(newBook);
}

const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json(Book.fetchAll())
}

const getBookById = (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).json(Book.findById(id))
}

const listAllBooks = (req: Request, res: Response) => {
    const clientPath = path.join(__dirname, "..", "..", "client.html")
    res.sendFile(clientPath)
}


export {
    saveBook, getAllBooks, getBookById, listAllBooks
}