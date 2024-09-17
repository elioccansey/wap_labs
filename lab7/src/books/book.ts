import { Author } from "../authors/author";

const books: Book[] = []
export class Book {
    private id: string;
    private title: string;
    private isbn: string;
    private publishedDate: Date;
    private author: Author

    constructor(
        id: string,
        title: string,
        isbn: string,
        publishedDate: Date,
        author: Author
    ) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;

    }

    save() {
        books.push(this)
        return this
    }

    update(): Book {
        const index = books.findIndex(book => book.id === this.id)
        books[index] = this;
        return this;
    }

    static fetchAll(): Book[] {
        return books;
    }

    static findById(id: string): Book {
        const book = books.find(book => book.id === id)
        if (book) return book;
        throw new Error(`Book of id ${id} not found`);
    }

    static deleteById(id: string) {
        const index = books.findIndex(book => book.id === id)
        if (index > -1) books.splice(index, 1)
        else throw new Error(`Book of id ${id} not found`);
    }


}