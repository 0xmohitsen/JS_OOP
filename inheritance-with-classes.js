class Category {
    constructor(category) {
        this.category = category;
    }

    getCategoryName() {
        console.log(this.category);
    }
}

class Product extends Category{
    constructor(name, price, category){
        super(category);
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(this.name , this.price);
        this.getCategoryName();
    }
}

let p = new Product("Iphone", 100000, "Electronics");
p.display();