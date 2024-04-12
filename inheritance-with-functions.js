function Product(name, price, category){
    this.name = name;
    this.price = price;

    Category.call(this, category);
}

function Category(category){
    this.category = category;
    this.categoryName = function () {
        console.log(this.category);
    }
}

let p1 = new Product("Iphone", 130000, "Electronics");

console.log(p1); // Product { name: 'Iphone', price: 130000, category: 'Electronics' }

p1.categoryName(); // Electronics

// lets try something new 

function Product1(name, price, category){
    this.name = name;
    this.price = price;

    Category1.call(this, category);
}

function Category1(category){
    this.category = category;
    // this.categoryName = function () {
    //     console.log(this.category);
    // }
}

Category1.prototype.categoryName = function () {
    console.log("Called categoryName method");
    console.log(this.category);
}

Product1.prototype = Object.create(Category1.prototype);

let p2 = new Product1("Iphone", 130000, "Electronics");

console.log(p2); // Product1 { name: 'Iphone', price: 130000 }

p2.categoryName(); // gives error