let products : Product[] = [];

class Product {
    constructor(private id:number, private title:string, private price:number, private description:string){
        this.id = id;
        this.description = description;
        this.price = price;
        this.title = title;
    }


    save():Product{
        products.push(this);
        return this;
    }

    update():Product{
        const existingProductIndex = Product.findProductIndex(products, this.id)
        products[existingProductIndex] = this;
        return this
    }

    private static findProductIndex(products:Product[], id:number):number{
        return products.findIndex(product => product.id === id)
    }

    static fetchAll():Product[]{
        return products;
    }

    static findById(id: number){
        const existingProductIndex = Product.findProductIndex(products, id)
        if(existingProductIndex !== -1){
            return products[existingProductIndex]
        }
        throw new Error(`Product of id ${id} not found`)
    }

    static deleteById(id: number):void {
        const existingProductIndex = Product.findProductIndex(products, id)
        if(existingProductIndex !== -1)
            products.splice(existingProductIndex, 1)
        else
            throw new Error(`Product of id ${id} not found`)
    }

}

export default Product;