class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    displayProduct() {
        console.log(`Product Name : ${this.name}\nProduct Price : ${this.price}`);
    }
}

const product1 = new Product("Iphone", 120000);

console.log(product1);

product1.displayProduct(); 

const price = product1.getPrice();
console.log(price);

product1.setPrice(130000);
console.log(product1.getPrice());