const rectangle = {
    length:20,
    with: 50,
    area: function(){
        return this.length * this.with;
    },
    print: function(){
        console.log("This a rectangle");
        console.log(`It's length is ${this.length}, width is ${this.with} and area ${this.area()}`)
    } 
}

rectangle.print();